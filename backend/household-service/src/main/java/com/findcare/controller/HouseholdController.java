package com.findcare.controller;

import com.findcare.dto.User;
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
    public ResponseEntity<?> getHousehold(@ModelAttribute User user) {
        try {
            log.info("Received household creation request: {}", user);
            User savedUser = householdService.createHousehold(user);
            return ResponseEntity.ok(savedUser.toString() + " created");
        } catch (IllegalArgumentException e) {
            log.warn("Invalid request: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IllegalStateException e) {
            log.error("Failed to create household", e);
            return ResponseEntity.internalServerError().body(e.getMessage());
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
