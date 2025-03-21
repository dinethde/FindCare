package com.findcare.caregiver.controller;

import com.findcare.caregiver.dto.CaregiverAccount;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import com.findcare.caregiver.service.CaregiverService;

@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
@RequestMapping("/api/caregivers")
public class CaregiverController {
    private final CaregiverService caregiverService;

    @PostMapping
    public ResponseEntity<CaregiverAccount> createCaregiver(@RequestBody CaregiverAccount caregiverAccount) {
        log.info("REQUEST: Creating caregiver - email: {}, name: {}, phone: {}",
                caregiverAccount.getEmail(),
                caregiverAccount.getUniqueIdentifier());

        try {
            CaregiverAccount createdCaregiverAccount = caregiverService.createCaregiver(caregiverAccount);
            log.info("RESPONSE: Successfully created caregiver with ID: {}, email: {}",
                    createdCaregiverAccount.getUniqueIdentifier(),
                    createdCaregiverAccount.getEmail());
            return ResponseEntity.ok(createdCaregiverAccount);
        } catch (Exception e) {
            log.error("ERROR: Failed to create caregiver with email: {} - Error: {}",
                    caregiverAccount.getEmail(),
                    e.getMessage(), e);
            throw e;
        }
    }

    @GetMapping("/{uniqueIdentifier}")
    public ResponseEntity<CaregiverAccount> getCaregiverByUniqueIdentifier(@PathVariable String uniqueIdentifier) {
        log.info("REQUEST: Fetching caregiver with uniqueIdentifier: {}", uniqueIdentifier);

        try {
            CaregiverAccount caregiver = caregiverService.getCaregiverByUniqueIdentifier(uniqueIdentifier);
            log.info("RESPONSE: Successfully retrieved caregiver with uniqueIdentifier: {}", uniqueIdentifier);
            return ResponseEntity.ok(caregiver);
        } catch (Exception e) {
            log.error("ERROR: Failed to fetch caregiver with uniqueIdentifier: {} - Error: {}",
                    uniqueIdentifier,
                    e.getMessage(), e);
            throw e;
        }
    }
}
