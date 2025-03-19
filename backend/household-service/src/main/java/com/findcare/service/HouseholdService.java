package com.findcare.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.findcare.dto.HouseholdDto;
import com.findcare.entity.AddressEntity;
import com.findcare.entity.HouseholdEntity;
import com.findcare.entity.PhoneEntity;
import com.findcare.repository.AddressRepository;
import com.findcare.repository.HouseholdRepository;
import com.findcare.repository.PhoneRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class HouseholdService {
 
    private final HouseholdRepository householdRepository;
    private final PhoneRepository phoneRepository;
    private final AddressRepository addressRepository;
    private final ObjectMapper objectMapper;
    
    @Transactional
    public HouseholdDto createHousehold(HouseholdDto householdDto) {
        try {
            // Validate that no ID is provided for new household
            if (householdDto.getHouseholdId() != null) {
                log.warn("Attempted to create household with predefined ID: {}. Removing ID to allow database generation.", householdDto.getHouseholdId());
                householdDto.setHouseholdId(null);
            }

            HouseholdEntity entity = objectMapper.convertValue(householdDto, HouseholdEntity.class);
            log.info("Attempting to save household: {}", entity);
            
            HouseholdEntity savedEntity = householdRepository.save(entity);
            log.info("Successfully saved household: {}", savedEntity);
            
            return objectMapper.convertValue(savedEntity, HouseholdDto.class);
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation while saving household", e);
            throw new IllegalStateException("Failed to save household due to database constraint violation", e);
        } catch (Exception e) {
            log.error("Error saving household", e);
            throw new IllegalStateException("Failed to save household", e);
        }
    }

    @Transactional
    public void updateHouseholdProfile(String authId, String language, String mobilePhone, 
                                    String landPhone, String address, String city, 
                                    String postalCode, String username, String useFor) {
        log.info("Starting household profile update for auth0Identifier: {}", authId);
        
        HouseholdEntity household = householdRepository.findByAuth0Identifier(authId)
            .orElseThrow(() -> new IllegalArgumentException("Household not found for auth0Identifier: " + authId));
        
        // Update household fields
        household.setPreferredLanguage(language);
        household.setUsername(username);
        household.setUseFor(useFor);
        
        HouseholdEntity savedHousehold = householdRepository.save(household);
        log.info("Updated household: {}", savedHousehold);
        
        // Handle address update/creation
        AddressEntity addressEntity = addressRepository.findByHousehold(household)
            .orElse(new AddressEntity());
            
        addressEntity.setHousehold(household);
        addressEntity.setAddress(address);
        addressEntity.setCity(city);
        addressEntity.setPostalCode(postalCode);
        
        AddressEntity savedAddress = addressRepository.save(addressEntity);
        log.info("Saved address: {}", savedAddress);
        
        // Handle phone update/creation
        PhoneEntity phoneEntity = phoneRepository.findByHousehold(household)
            .orElse(new PhoneEntity());
            
        phoneEntity.setHousehold(household);
        phoneEntity.setPhoneNumber(mobilePhone);
        phoneEntity.setLandPhone(landPhone);
        
        PhoneEntity savedPhone = phoneRepository.save(phoneEntity);
        log.info("Saved phone: {}", savedPhone);
    }

    public HouseholdDto getHouseholdByAuth0Identifier(String auth0Identifier) {
        log.info("Fetching household for auth0Identifier: {}", auth0Identifier);
        return householdRepository.findByAuth0Identifier(auth0Identifier)
                .map(entity -> objectMapper.convertValue(entity, HouseholdDto.class))
                .orElseThrow(() -> new RuntimeException("Household not found for auth0Identifier: " + auth0Identifier));
    }

    public boolean testDatabaseConnection() {
        try {
            householdRepository.count();
            return true;
        } catch (Exception e) {
            log.error("Database connection test failed", e);
            return false;
        }
    }
}