package com.findcare.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.findcare.dto.User;
import com.findcare.entity.HouseholdEntity;
import com.findcare.repository.HouseholdRepository;
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
    private final ObjectMapper objectMapper;
    
    // create household
    @Transactional
    public User createHousehold(User user) {
        try {
            // Check if ID already exists
            if (user.getHouseholdId() != null && householdRepository.existsById(user.getHouseholdId())) {
                throw new IllegalArgumentException("Household ID already exists: " + user.getHouseholdId());
            }

            HouseholdEntity entity = objectMapper.convertValue(user, HouseholdEntity.class);
            log.info("Attempting to save household: {}", entity);
            
            HouseholdEntity returnEntity = householdRepository.save(entity);
            log.info("Successfully saved household: {}", returnEntity);
            
            return objectMapper.convertValue(returnEntity, User.class);
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation while saving household", e);
            throw new IllegalStateException("Failed to save household due to database constraint violation", e);
        } catch (Exception e) {
            log.error("Error saving household", e);
            throw new IllegalStateException("Failed to save household", e);
        }
    }

    public boolean testDatabaseConnection() {
        try {
            // Try to execute a simple query
            householdRepository.count();
            return true;
        } catch (Exception e) {
            log.error("Database connection test failed", e);
            return false;
        }
    }
}