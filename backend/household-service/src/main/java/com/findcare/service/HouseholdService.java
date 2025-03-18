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
    public boolean updateHouseholdProfile(String authId, String language, String mobilePhone, 
                                       String landPhone, String address, String city, 
                                       String postalCode, String username, String useFor) {
        log.info("Updating household profile for auth0Identifier: {}", authId);
        
        Optional<HouseholdEntity> householdOpt = householdRepository.findByAuth0Identifier(authId);
        if (householdOpt.isEmpty()) {
            log.error("Household not found for auth0Identifier: {}", authId);
            return false;
        }
        
        HouseholdEntity household = householdOpt.get();
        
        // Update household fields
        if (language != null) household.setPreferredLanguage(language);
        if (username != null) household.setUsername(username);
        if (useFor != null) household.setUseFor(useFor);
        
        try {
            // Save household updates
            household = householdRepository.save(household);
            
            // Create or update phone information
            updatePhoneInfo(household, mobilePhone, landPhone);
            
            // Create or update address information
            updateAddressInfo(household, address, city, postalCode);
            
            log.info("Successfully updated household profile with ID: {}", household.getHouseholdId());
            return true;
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation while updating household profile", e);
            throw new IllegalStateException("Failed to update household profile due to database constraint violation", e);
        } catch (Exception e) {
            log.error("Error updating household profile", e);
            throw new IllegalStateException("Failed to update household profile", e);
        }
    }
    
    private void updatePhoneInfo(HouseholdEntity household, String mobilePhone, String landPhone) {
        if (mobilePhone != null || landPhone != null) {
            // Check for existing phone record
            PhoneEntity phoneEntity = new PhoneEntity();
            phoneRepository.findByHousehold(household)
                .stream()
                .findFirst()
                .ifPresentOrElse(
                    existing -> {
                        if (mobilePhone != null) existing.setPhoneNumber(mobilePhone);
                        if (landPhone != null) existing.setLandPhone(landPhone);
                        phoneRepository.save(existing);
                    },
                    () -> {
                        PhoneEntity newPhone = new PhoneEntity();
                        newPhone.setHousehold(household);
                        newPhone.setPhoneNumber(mobilePhone);
                        newPhone.setLandPhone(landPhone);
                        phoneRepository.save(newPhone);
                    }
                );
        }
    }
    
    private void updateAddressInfo(HouseholdEntity household, String address, String city, String postalCode) {
        if (address != null || city != null || postalCode != null) {
            // Check for existing address record
            addressRepository.findByHousehold(household)
                .stream()
                .findFirst()
                .ifPresentOrElse(
                    existing -> {
                        if (address != null) existing.setAddress(address);
                        if (city != null) existing.setCity(city);
                        if (postalCode != null) existing.setPostalCode(postalCode);
                        addressRepository.save(existing);
                    },
                    () -> {
                        AddressEntity newAddress = new AddressEntity();
                        newAddress.setHousehold(household);
                        newAddress.setAddress(address);
                        newAddress.setCity(city);
                        newAddress.setPostalCode(postalCode);
                        addressRepository.save(newAddress);
                    }
                );
        }
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