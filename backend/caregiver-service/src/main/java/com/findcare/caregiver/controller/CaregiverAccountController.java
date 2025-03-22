package com.findcare.caregiver.controller;

import com.findcare.caregiver.dto.CaregiverAccount;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.findcare.caregiver.service.CaregiverAccountService;
import jakarta.validation.Valid;

/**
 * REST Controller for managing caregiver account operations.
 * Provides endpoints for creating and retrieving caregiver account information.
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
@RequestMapping("/api/caregivers/accounts")
public class CaregiverAccountController {
    private final CaregiverAccountService caregiverService;

    /**
     * Creates a new caregiver account.
     * 
     * @param caregiverAccount The caregiver account information to be created
     * @return ResponseEntity containing the created caregiver account with
     *         generated ID
     */
    @PostMapping
    public ResponseEntity<CaregiverAccount> createCaregiver(@Valid @RequestBody CaregiverAccount caregiverAccount) {
        log.info("REQUEST: Creating caregiver - email: {}, uniqueIdentifier: {}",
                caregiverAccount.getEmail(),
                caregiverAccount.getUniqueIdentifier());

        CaregiverAccount createdCaregiverAccount = caregiverService.createCaregiver(caregiverAccount);

        log.info("RESPONSE: Successfully created caregiver with ID: {}, email: {}",
                createdCaregiverAccount.getUniqueIdentifier(),
                createdCaregiverAccount.getEmail());

        return ResponseEntity.ok(createdCaregiverAccount);
    }

    /**
     * Retrieves a caregiver account by its unique identifier.
     * 
     * @param uniqueIdentifier The unique identifier of the caregiver account
     * @return ResponseEntity containing the caregiver account if found
     */
    @GetMapping("/{uniqueIdentifier}")
    public ResponseEntity<CaregiverAccount> getCaregiverByUniqueIdentifier(@PathVariable String uniqueIdentifier) {
        log.info("REQUEST: Fetching caregiver with uniqueIdentifier: {}", uniqueIdentifier);

        CaregiverAccount caregiver = caregiverService.getCaregiverByUniqueIdentifier(uniqueIdentifier);

        log.info("RESPONSE: Successfully retrieved caregiver with uniqueIdentifier: {}", uniqueIdentifier);

        return ResponseEntity.ok(caregiver);
    }
}
