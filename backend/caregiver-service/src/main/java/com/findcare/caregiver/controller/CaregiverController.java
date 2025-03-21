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
     * @throws jakarta.validation.ValidationException if the caregiver data fails
     *                                                validation
     */
    @PostMapping
    public ResponseEntity<Caregiver> createCaregiver(@Valid @RequestBody Caregiver caregiver) {
        log.info("REQUEST: Creating caregiver - NIC: {}, Name: {} {}",
                caregiver.getNicNumber(),
                caregiver.getFirstName(),
                caregiver.getLastName());

        Caregiver createdCaregiver = caregiverService.createCaregiver(caregiver);

        log.info("RESPONSE: Successfully created caregiver with ID: {}", createdCaregiver.getCaregiverId());
        return ResponseEntity.ok(createdCaregiver);
    }

    /**
     * Retrieves a caregiver by their account ID.
     * 
     * @param accountId The unique identifier of the caregiver's account
     * @return ResponseEntity containing the caregiver information if found
     * @throws org.springframework.web.server.ResponseStatusException if caregiver
     *                                                                is not found
     */
    @GetMapping("/{accountId}")
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
     * @throws org.springframework.web.server.ResponseStatusException with
     *                                                                INTERNAL_SERVER_ERROR
     *                                                                if there's an
     *                                                                unexpected
     *                                                                error
     */
    @GetMapping
    public ResponseEntity<List<Caregiver>> getAllCaregivers() {
        log.info("REQUEST: Fetching all caregivers");

        List<Caregiver> caregivers = caregiverService.getAllCaregivers();

        log.info("RESPONSE: Successfully retrieved {} caregivers", caregivers.size());
        return ResponseEntity.ok(caregivers);
    }
}