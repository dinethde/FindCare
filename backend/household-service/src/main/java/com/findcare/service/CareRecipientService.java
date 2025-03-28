package com.findcare.service;

import com.findcare.entity.CareRecipientEntity;
import com.findcare.entity.HouseholdEntity;
import com.findcare.repository.CareRecipientRepository;
import com.findcare.repository.HouseholdRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class CareRecipientService {
    
    private final CareRecipientRepository careRecipientRepository;
    private final HouseholdRepository householdRepository;
    
    @Transactional
    public CareRecipientEntity addCareRecipient(Map<String, String> requestParams) {
        String authId = requestParams.get("authid");
        log.info("Adding care recipient for household with auth0Identifier: {}", authId);
        
        // Validate household existence
        HouseholdEntity household = householdRepository.findByAuth0Identifier(authId)
            .orElseThrow(() -> {
                log.error("Household not found for auth0Identifier: {}", authId);
                return new EntityNotFoundException("Household not found for auth0Identifier: " + authId);
            });
        
        CareRecipientEntity careRecipient = new CareRecipientEntity();
        careRecipient.setHousehold(household);
        
        // Handle required fields
        careRecipient.setFirstName(requestParams.get("name"));
        careRecipient.setLastName(requestParams.getOrDefault("lname", "")); // Handling missing last name
        
        // Handle DOB - age will be calculated automatically via @PrePersist
        try {
            if (requestParams.containsKey("DOB") && !requestParams.get("DOB").isEmpty()) {
                careRecipient.setDob(LocalDate.parse(requestParams.get("DOB")));
            }
        } catch (DateTimeParseException e) {
            log.error("Invalid date format for DOB: {}", requestParams.get("DOB"), e);
            throw new IllegalArgumentException("Invalid date format for DOB. Expected format is yyyy-MM-dd", e);
        }
        
        // Handle optional fields
        if (requestParams.containsKey("gender")) {
            careRecipient.setGender(requestParams.get("gender"));
        }
        
        if (requestParams.containsKey("weight")) {
            try {
                careRecipient.setWeight(Double.parseDouble(requestParams.get("weight")));
            } catch (NumberFormatException e) {
                log.warn("Invalid weight format: {}, setting to null", requestParams.get("weight"));
            }
        }
        
        if (requestParams.containsKey("height")) {
            try {
                careRecipient.setHeight(Double.parseDouble(requestParams.get("height")));
            } catch (NumberFormatException e) {
                log.warn("Invalid height format: {}, setting to null", requestParams.get("height"));
            }
        }
        
        if (requestParams.containsKey("patientPhotoURL")) {
            careRecipient.setImage(requestParams.get("patientPhotoURL"));
        }
        
        if (requestParams.containsKey("about")) {
            careRecipient.setAbout(requestParams.get("about"));
        }
        
        log.info("Saving care recipient: {}", careRecipient);
        CareRecipientEntity savedEntity = careRecipientRepository.save(careRecipient);
        log.info("Successfully saved care recipient with ID: {}", savedEntity.getCareRecipientId());
        
        return savedEntity;
    }
}