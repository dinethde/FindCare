package com.findcare.controller;

import com.findcare.entity.CareRecipientEntity;
import com.findcare.service.CareRecipientService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/care-recipient")
@RequiredArgsConstructor
public class CareRecipientController {

    private final CareRecipientService careRecipientService;

    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public ResponseEntity<Object> addCareRecipient(@RequestParam Map<String, String> requestParams) {
        log.info("Received request to add care recipient with params: {}", requestParams);
        
        try {
            // Validate required parameters
            if (!requestParams.containsKey("authid") || requestParams.get("authid").isEmpty()) {
                log.error("Missing required parameter: authid");
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("status", "error");
                errorResponse.put("message", "Missing required parameter: authid");
                return ResponseEntity.badRequest().body(errorResponse);
            }
            
            if (!requestParams.containsKey("name") || requestParams.get("name").isEmpty()) {
                log.error("Missing required parameter: name");
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("status", "error");
                errorResponse.put("message", "Missing required parameter: name");
                return ResponseEntity.badRequest().body(errorResponse);
            }
            
            CareRecipientEntity savedCareRecipient = careRecipientService.addCareRecipient(requestParams);
            
            Map<String, Object> response = new HashMap<>();
            response.put("status", "success");
            response.put("message", "CareRecipient added successfully");
            response.put("careRecipientId", savedCareRecipient.getCareRecipientId());
            
            return ResponseEntity.ok(response);
            
        } catch (EntityNotFoundException e) {
            log.error("Error adding care recipient: {}", e.getMessage());
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.status(404).body(errorResponse);
            
        } catch (IllegalArgumentException e) {
            log.error("Invalid parameter: {}", e.getMessage());
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
            
        } catch (Exception e) {
            log.error("Unexpected error adding care recipient", e);
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("status", "error");
            errorResponse.put("message", "An unexpected error occurred");
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
}