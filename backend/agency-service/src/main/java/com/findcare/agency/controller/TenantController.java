package com.findcare.agency.controller;

import com.findcare.agency.dto.ApiResponse;
import com.findcare.agency.dto.TenantDTO;
import com.findcare.agency.entity.TenantEntity;
import com.findcare.agency.multitenancy.TenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/tenants")
public class TenantController {

    private final TenantService tenantService;

    @Autowired
    public TenantController(TenantService tenantService) {
        this.tenantService = tenantService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<TenantDTO>> createTenant(@Valid @RequestBody TenantDTO tenantDTO) {
        try {
            TenantEntity tenant = tenantService.createTenant(tenantDTO.getName(), tenantDTO.getClerkId());
            TenantDTO responseDTO = convertToDTO(tenant);
            
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(new ApiResponse<>(true, "Tenant created successfully", responseDTO));
        } catch (TenantService.TenantAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new ApiResponse<>(false, e.getMessage(), null));
        } catch (TenantService.TenantProvisioningException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(false, "Failed to provision tenant: " + e.getMessage(), null));
        }
    }

    @GetMapping("/{clerkId}")
    public ResponseEntity<ApiResponse<TenantDTO>> getTenantByClerkId(@PathVariable String clerkId) {
        Optional<TenantEntity> tenantOpt = tenantService.getTenantByClerkId(clerkId);
        
        if (tenantOpt.isPresent()) {
            TenantDTO tenantDTO = convertToDTO(tenantOpt.get());
            return ResponseEntity.ok(new ApiResponse<>(true, "Tenant found", tenantDTO));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ApiResponse<>(false, "Tenant not found", null));
        }
    }

    private TenantDTO convertToDTO(TenantEntity tenant) {
        TenantDTO dto = new TenantDTO();
        dto.setId(tenant.getId());
        dto.setName(tenant.getName());
        dto.setClerkId(tenant.getClerkId());
        dto.setDatabaseName(tenant.getDatabaseName());
        dto.setStatus(tenant.getStatus());
        dto.setCreatedAt(tenant.getCreatedAt());
        return dto;
    }
}