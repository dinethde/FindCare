package com.findcare.caregiver.dto;

import lombok.Data;

@Data
public class CaregiverAccount {
    private Integer caregiverAccountId;

    private String uniqueIdentifier;
    private String email;
    private boolean mobileAppStatus;
    // Add other required fields
}
