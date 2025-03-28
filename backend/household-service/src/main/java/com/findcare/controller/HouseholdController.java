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

import java.util.HashMap;
import java.util.Map;

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

    @PutMapping(value = "/profile", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<Object> updateHouseholdProfile(
            @RequestParam("authId") String authId,
            @RequestParam("language") String language,
            @RequestParam(value = "mobile-1", required = false) String mobilePhone,
            @RequestParam(value = "land-phone", required = false) String landPhone,
            @RequestParam("address") String address,
            @RequestParam("city") String city,
            @RequestParam("postalCode") String postalCode,
            @RequestParam("user-name") String username,
            @RequestParam("use-for") String useFor) {
        
        try {
            log.info("Updating household profile - authId: {}, language: {}", authId, language);
            log.info("Address info - address: {}, city: {}, postalCode: {}", address, city, postalCode);
            log.info("Contact info - mobile: {}, landline: {}", mobilePhone, landPhone);
            
            householdService.updateHouseholdProfile(authId, language, mobilePhone, landPhone, 
                    address, city, postalCode, username, useFor);
            
            Map<String, String> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "Household profile updated successfully");
            return ResponseEntity.ok(response);
            
        } catch (RuntimeException e) {
            log.error("Error updating household profile: {}", e.getMessage(), e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
}
