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
        log.info("Updating household profile for auth0Identifier: {} with language: {}", authId, language);
        
        Optional<HouseholdEntity> householdOpt = householdRepository.findByAuth0Identifier(authId);
        if (householdOpt.isEmpty()) {
            log.error("Household not found for auth0Identifier: {}", authId);
            return false;
        }
        
        try {
            HouseholdEntity household = householdOpt.get();
            boolean needsUpdate = false;
            
            // Update household fields
            if (language != null && !language.trim().isEmpty()) {
                log.debug("Setting preferred_language from '{}' to '{}'", household.getPreferredLanguage(), language);
                household.setPreferredLanguage(language.trim());
                needsUpdate = true;
            }
            if (username != null && !username.trim().isEmpty()) {
                household.setUsername(username.trim());
                needsUpdate = true;
            }
            if (useFor != null && !useFor.trim().isEmpty()) {
                household.setUseFor(useFor.trim());
                needsUpdate = true;
            }
            
            // Save household updates if needed
            if (needsUpdate) {
                household = householdRepository.save(household);
                log.debug("Updated household: {}", household);
            }
            
            // Handle phones if provided
            if (mobilePhone != null || landPhone != null) {
                updatePhoneInfo(household, mobilePhone, landPhone);
            }
            
            // Handle address if any address field is provided
            if ((address != null && !address.trim().isEmpty()) || 
                (city != null && !city.trim().isEmpty()) || 
                (postalCode != null && !postalCode.trim().isEmpty())) {
                updateAddressInfo(household, address, city, postalCode);
            }
            
            return true;
        } catch (Exception e) {
            log.error("Error updating household profile", e);
            throw new IllegalStateException("Failed to update household profile", e);
        }
    }
    
    private void updatePhoneInfo(HouseholdEntity household, String mobilePhone, String landPhone) {
        if (mobilePhone != null || landPhone != null) {
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
        log.debug("Starting address update for household ID: {} with address: {}, city: {}, postalCode: {}", 
                 household.getHouseholdId(), address, city, postalCode);
        
        try {
            var existingAddresses = addressRepository.findByHousehold(household);
            AddressEntity addressEntity;
            
            if (existingAddresses.isEmpty()) {
                addressEntity = new AddressEntity();
                addressEntity.setHousehold(household);
                log.debug("Creating new address for household ID: {}", household.getHouseholdId());
            } else {
                addressEntity = existingAddresses.get(0);
                log.debug("Updating existing address ID: {} for household ID: {}", 
                         addressEntity.getAddressId(), household.getHouseholdId());
            }
            
            // Update only non-null and non-empty values
            if (address != null && !address.trim().isEmpty()) {
                addressEntity.setAddress(address.trim());
            }
            if (city != null && !city.trim().isEmpty()) {
                addressEntity.setCity(city.trim());
            }
            if (postalCode != null && !postalCode.trim().isEmpty()) {
                addressEntity.setPostalCode(postalCode.trim());
            }
            
            var savedAddress = addressRepository.save(addressEntity);
            log.info("Successfully saved address ID: {} for household ID: {}", 
                    savedAddress.getAddressId(), household.getHouseholdId());
        } catch (Exception e) {
            log.error("Failed to save address for household ID: {}", household.getHouseholdId(), e);
            throw new IllegalStateException("Failed to save address", e);
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