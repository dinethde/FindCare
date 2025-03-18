package com.findcare.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.findcare.dto.HouseholdDto;
import com.findcare.entity.HouseholdEntity;
import com.findcare.repository.HouseholdRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class HouseholdService {
 
    private final HouseholdRepository householdRepository;
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
    public HouseholdDto createHouseholdWithRequiredFields(String authId, String email, String fName) {
        try {
            HouseholdDto householdDto = new HouseholdDto();
            householdDto.setAuth0Identifier(authId);
            householdDto.setEmail(email);
            householdDto.setName(fName);
            
            log.info("Creating new household with required fields only: auth0Id={}, email={}, name={}", authId, email, fName);
            
            HouseholdEntity entity = objectMapper.convertValue(householdDto, HouseholdEntity.class);
            HouseholdEntity savedEntity = householdRepository.save(entity);
            
            log.info("Successfully created household with ID: {}", savedEntity.getHouseholdId());
            
            return objectMapper.convertValue(savedEntity, HouseholdDto.class);
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation while creating household", e);
            throw new IllegalStateException("Failed to create household due to database constraint violation", e);
        } catch (Exception e) {
            log.error("Error creating household", e);
            throw new IllegalStateException("Failed to create household", e);
        }
    }
    
    @Transactional
    public HouseholdDto updateHouseholdProfile(String auth0Identifier, HouseholdDto updateData) {
        try {
            log.info("Updating profile for household with auth0Identifier: {}", auth0Identifier);
            
            HouseholdEntity existingEntity = householdRepository.findByAuth0Identifier(auth0Identifier)
                .orElseThrow(() -> new RuntimeException("Household not found for auth0Identifier: " + auth0Identifier));
            
            // Update fields from the updateData, preserving the existing ID and auth0Identifier
            if (updateData.getUseFor() != null) existingEntity.setUseFor(updateData.getUseFor());
            if (updateData.getName() != null) existingEntity.setName(updateData.getName());
            if (updateData.getUsername() != null) existingEntity.setUsername(updateData.getUsername());
            if (updateData.getEmail() != null) existingEntity.setEmail(updateData.getEmail());
            if (updateData.getPreferredLanguage() != null) existingEntity.setPreferredLanguage(updateData.getPreferredLanguage());
            
            HouseholdEntity updatedEntity = householdRepository.save(existingEntity);
            log.info("Successfully updated household profile: {}", updatedEntity);
            
            return objectMapper.convertValue(updatedEntity, HouseholdDto.class);
        } catch (RuntimeException e) {
            log.error("Household not found for update", e);
            throw e;
        } catch (Exception e) {
            log.error("Error updating household profile", e);
            throw new IllegalStateException("Failed to update household profile", e);
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