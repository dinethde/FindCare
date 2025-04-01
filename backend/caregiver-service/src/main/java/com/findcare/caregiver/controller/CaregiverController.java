package com.findcare.caregiver.controller;

import com.findcare.caregiver.dto.Caregiver;
import com.findcare.caregiver.service.CaregiverService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * REST Controller for managing caregiver-related operations.
 * Provides endpoints for creating and retrieving caregiver information.
 */
@RestController
@RequiredArgsConstructor
@Slf4j
@CrossOrigin
@RequestMapping("/api/caregivers")
public class CaregiverController {
    private final CaregiverService caregiverService;

    /**
     * Creates a new caregiver in the system.
     * 
     * @param caregiver The caregiver information to be created. Must be valid
     *                  according to the DTO constraints.
     * @return ResponseEntity containing the created caregiver with generated ID
     */
    @PostMapping
    public ResponseEntity<Caregiver> createCaregiver(@Valid @RequestBody Caregiver caregiver) {
        log.info("REQUEST: Creating caregiver - NIC: {}, Name: {} {}",
                caregiver.getNicNumber(),
                caregiver.getFirstName(),
                caregiver.getLastName());

        Caregiver createdCaregiver = caregiverService.createCaregiver(caregiver);

        log.info("RESPONSE: Successfully created caregiver with ID: {}, NIC: {}",
                createdCaregiver.getCaregiverId(),
                createdCaregiver.getNicNumber());
        return ResponseEntity.ok(createdCaregiver);
    }

    /**
     * Retrieves a caregiver by their ID.
     * 
     * @param id The unique identifier of the caregiver
     * @return ResponseEntity containing the caregiver information if found
     */
    @GetMapping("/id/{id}")
    public ResponseEntity<Caregiver> getCaregiverById(@PathVariable Integer id) {
        log.info("REQUEST: Fetching caregiver with ID: {}", id);

        Caregiver caregiver = caregiverService.getCaregiverById(id);

        log.info("RESPONSE: Successfully retrieved caregiver with ID: {}", caregiver.getCaregiverId());
        return ResponseEntity.ok(caregiver);
    }

    /**
     * Retrieves a caregiver by their account ID.
     * 
     * @param accountId The unique identifier of the caregiver's account
     * @return ResponseEntity containing the caregiver information if found
     * @deprecated Use {@link #getCaregiverById(Integer)} instead
     */
    @GetMapping("/account/{accountId}")
    public ResponseEntity<Caregiver> getCaregiverByAccountId(@PathVariable Integer accountId) {
        log.info("REQUEST: Fetching caregiver with account ID: {}", accountId);

        Caregiver caregiver = caregiverService.getCaregiverByAccountId(accountId);

        log.info("RESPONSE: Successfully retrieved caregiver with ID: {}", caregiver.getCaregiverId());
        return ResponseEntity.ok(caregiver);
    }

    /**
     * Retrieves all caregivers from the system.
     * 
     * @return ResponseEntity containing a list of all caregivers
     */
    @GetMapping
    public ResponseEntity<List<Caregiver>> getAllCaregivers() {
        log.info("REQUEST: Fetching all caregivers");

        List<Caregiver> caregivers = caregiverService.getAllCaregivers();

        log.info("RESPONSE: Successfully retrieved {} caregivers", caregivers.size());
        return ResponseEntity.ok(caregivers);
    }
}