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