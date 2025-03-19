package com.findcare.caregiver.controller;

import com.findcare.caregiver.dto.CaregiverAccount;
import com.findcare.caregiver.entity.CaregiverAccountEntity;

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
        log.info("Creating caregiver with email: {}", caregiverAccount.getEmail());
        CaregiverAccount createdCaregiverAccount = caregiverService.createCaregiver(caregiverAccount);
        return ResponseEntity.ok(createdCaregiverAccount);
    }
}
