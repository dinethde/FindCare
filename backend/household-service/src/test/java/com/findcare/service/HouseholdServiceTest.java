package com.findcare.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.findcare.dto.HouseholdDto;
import com.findcare.entity.AddressEntity;
import com.findcare.entity.HouseholdEntity;
import com.findcare.entity.PhoneEntity;
import com.findcare.repository.AddressRepository;
import com.findcare.repository.HouseholdRepository;
import com.findcare.repository.PhoneRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class HouseholdServiceTest {

    @Mock
    private HouseholdRepository householdRepository;

    @Mock
    private PhoneRepository phoneRepository;

    @Mock
    private AddressRepository addressRepository;

    @Spy
    private ObjectMapper objectMapper = new ObjectMapper();

    @InjectMocks
    private HouseholdService householdService;

    private HouseholdDto testHouseholdDto;
    private HouseholdEntity testHouseholdEntity;

    @BeforeEach
    void setUp() {
        testHouseholdDto = new HouseholdDto();
        testHouseholdDto.setAuth0Identifier("auth0_test");
        testHouseholdDto.setName("Test User");
        testHouseholdDto.setUsername("testuser");
        testHouseholdDto.setEmail("test@example.com");
        testHouseholdDto.setPreferredLanguage("English");

        testHouseholdEntity = objectMapper.convertValue(testHouseholdDto, HouseholdEntity.class);
    }

    @Test
    void createHousehold_Success() {
        when(householdRepository.save(any(HouseholdEntity.class))).thenReturn(testHouseholdEntity);

        HouseholdDto result = householdService.createHousehold(testHouseholdDto);

        assertNotNull(result);
        assertEquals(testHouseholdDto.getAuth0Identifier(), result.getAuth0Identifier());
        assertEquals(testHouseholdDto.getName(), result.getName());
        verify(householdRepository, times(1)).save(any(HouseholdEntity.class));
    }

    @Test
    void createHousehold_WithPredefinedId_RemovesId() {
        testHouseholdDto.setHouseholdId(1L);
        when(householdRepository.save(any(HouseholdEntity.class))).thenReturn(testHouseholdEntity);

        HouseholdDto result = householdService.createHousehold(testHouseholdDto);

        assertNotNull(result);
        assertNull(result.getHouseholdId());
        verify(householdRepository, times(1)).save(any(HouseholdEntity.class));
    }

    @Test
    void createHousehold_DatabaseError_ThrowsException() {
        when(householdRepository.save(any(HouseholdEntity.class)))
            .thenThrow(new DataIntegrityViolationException("Database error"));

        assertThrows(IllegalStateException.class, () -> 
            householdService.createHousehold(testHouseholdDto));
    }

    @Test
    void updateHouseholdProfile_Success() {
        when(householdRepository.findByAuth0Identifier("auth0_test"))
            .thenReturn(Optional.of(testHouseholdEntity));
        when(householdRepository.save(any(HouseholdEntity.class)))
            .thenReturn(testHouseholdEntity);
        when(addressRepository.findByHousehold(any()))
            .thenReturn(Optional.of(new AddressEntity()));
        when(phoneRepository.findByHousehold(any()))
            .thenReturn(Optional.of(new PhoneEntity()));
        when(addressRepository.save(any())).thenReturn(new AddressEntity());
        when(phoneRepository.save(any())).thenReturn(new PhoneEntity());

        assertDoesNotThrow(() -> householdService.updateHouseholdProfile(
            "auth0_test", "Spanish", "1234567890", "0987654321",
            "123 Test St", "Test City", "12345", "newuser", "personal"
        ));

        verify(householdRepository, times(1)).save(any(HouseholdEntity.class));
        verify(addressRepository, times(1)).save(any(AddressEntity.class));
        verify(phoneRepository, times(1)).save(any(PhoneEntity.class));
    }

    @Test
    void updateHouseholdProfile_HouseholdNotFound_ThrowsException() {
        when(householdRepository.findByAuth0Identifier("nonexistent_auth0"))
            .thenReturn(Optional.empty());

        assertThrows(IllegalArgumentException.class, () ->
            householdService.updateHouseholdProfile(
                "nonexistent_auth0", "English", null, null,
                null, null, null, null, null
            ));
    }

    @Test
    void getHouseholdByAuth0Identifier_Success() {
        when(householdRepository.findByAuth0Identifier("auth0_test"))
            .thenReturn(Optional.of(testHouseholdEntity));

        HouseholdDto result = householdService.getHouseholdByAuth0Identifier("auth0_test");

        assertNotNull(result);
        assertEquals(testHouseholdDto.getAuth0Identifier(), result.getAuth0Identifier());
        assertEquals(testHouseholdDto.getName(), result.getName());
    }

    @Test
    void getHouseholdByAuth0Identifier_NotFound_ThrowsException() {
        when(householdRepository.findByAuth0Identifier("nonexistent_auth0"))
            .thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () ->
            householdService.getHouseholdByAuth0Identifier("nonexistent_auth0"));
    }

    @Test
    void testDatabaseConnection_Success() {
        when(householdRepository.count()).thenReturn(0L);

        boolean result = householdService.testDatabaseConnection();

        assertTrue(result);
        verify(householdRepository, times(1)).count();
    }

    @Test
    void testDatabaseConnection_Failure() {
        when(householdRepository.count()).thenThrow(new RuntimeException("Database connection failed"));

        boolean result = householdService.testDatabaseConnection();

        assertFalse(result);
        verify(householdRepository, times(1)).count();
    }
}