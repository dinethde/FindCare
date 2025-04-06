package com.findcare.agency.controller;

import com.findcare.agency.dto.AccountDTO;
import com.findcare.agency.dto.ApiResponse;
import com.findcare.agency.dto.Tenant;
import com.findcare.agency.service.AccountService;
import com.findcare.agency.service.TenantService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


/**
 * Controller for tenant sign-up and sign-in operations
 */
@RestController
@RequestMapping("/api/auth")
public class TenantController {

    @Autowired
    private TenantService tenantService;

    /**
     * Sign up a new tenant (creates a new database)
     */
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@Valid @RequestBody SignUpRequest request) {
        try {
            // Create new tenant with its own database
            Tenant tenant = tenantService.createTenant(request.getTenantId(), request.getName());

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Tenant created successfully");
            response.put("tenantId", tenant.getTenantId());

            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    /**
     * Sign in to a tenant (validates tenant exists and sets up connection)
     */
    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@Valid @RequestBody SignInRequest request) {
        try {
            // Check if tenant exists and set it as the current tenant
            return tenantService.getTenant(request.getTenantId())
                    .map(tenant -> {
                        Map<String, Object> response = new HashMap<>();
                        response.put("success", true);
                        response.put("message", "Signed in successfully");
                        response.put("tenantId", tenant.getTenantId());
                        response.put("name", tenant.getName());

                        // Set X-TenantID header in response for subsequent requests
                        return ResponseEntity.ok()
                                .header("X-TenantID", tenant.getTenantId())
                                .body(response);
                    })
                    .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND)
                            .body(Map.of("success", false, "message", "Tenant not found")));
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }

    // Request and response classes
    @Data
    public static class SignUpRequest {
        @NotBlank
        private String tenantId;

        @NotBlank
        private String name;
    }

    @Data
    public static class SignInRequest {
        @NotBlank
        private String tenantId;
    }
}