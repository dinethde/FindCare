package com.findcare.controller;

import com.findcare.dto.HouseholdDto;
import com.findcare.service.HouseholdService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/household")
@RequiredArgsConstructor
public class HouseholdController {

    private final HouseholdService householdService;

    @PostMapping(value = "/", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<HouseholdDto> createHousehold(@ModelAttribute HouseholdDto household) {
        try {
            HouseholdDto createdHousehold = householdService.createHousehold(household);
            return ResponseEntity.ok(createdHousehold);
        } catch (Exception e) {
            log.error("Error creating household", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/health")
    public ResponseEntity<String> checkDatabaseConnection() {
        try {
            boolean isConnected = householdService.testDatabaseConnection();
            if (isConnected) {
                return ResponseEntity.ok("Successfully connected to Azure database");
            } else {
                return ResponseEntity.status(503).body("Database connection failed");
            }
        } catch (Exception e) {
            return ResponseEntity.status(503).body("Database connection error: " + e.getMessage());
        }
    }
}
