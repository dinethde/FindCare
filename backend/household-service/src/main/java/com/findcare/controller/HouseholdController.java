package com.findcare.controller;

import com.findcare.dto.HouseholdDto;
import com.findcare.service.HouseholdService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/household")
@RequiredArgsConstructor
public class HouseholdController {

    private final HouseholdService householdService;

    @PostMapping(value = "/", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> createHouseholdJson(@Valid @RequestBody HouseholdDto household, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors());
        }
        try {
            HouseholdDto createdHousehold = householdService.createHousehold(household);
            return ResponseEntity.ok(createdHousehold);
        } catch (Exception e) {
            log.error("Error creating household", e);
            return ResponseEntity.internalServerError().body("Failed to create household: " + e.getMessage());
        }
    }

    @PostMapping(value = "/form", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<HouseholdDto> createHouseholdForm(@ModelAttribute HouseholdDto household) {
        try {
            HouseholdDto createdHousehold = householdService.createHousehold(household);
            return ResponseEntity.ok(createdHousehold);
        } catch (Exception e) {
            log.error("Error creating household", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping(value = "/")
    public ResponseEntity<HouseholdDto> getHousehold(@RequestHeader("auth0Identifier") String auth0Identifier) {
        try {
            HouseholdDto household = householdService.getHouseholdByAuth0Identifier(auth0Identifier);
            return ResponseEntity.ok(household);
        } catch (RuntimeException e) {
            log.error("Error fetching household", e);
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            log.error("Unexpected error fetching household", e);
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
