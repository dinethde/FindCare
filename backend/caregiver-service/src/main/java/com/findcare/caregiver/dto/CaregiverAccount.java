package com.findcare.caregiver.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Data Transfer Object (DTO) representing a caregiver account.
 * This class is used for transferring caregiver account data between the service layer and client applications.
 * It includes fields for account identification, unique identifiers, and contact details.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CaregiverAccount {
    /**
     * Unique identifier for the caregiver account.
     */
    private Integer caregiverAccountId;

    /**
     * A unique identifier for the caregiver, such as a username or external system ID.
     * This field is required and cannot be blank.
     */
    @NotBlank(message = "Unique identifier is required")
    private String uniqueIdentifier;

    /**
     * Email address associated with the caregiver account.
     * This field is required and must follow a valid email format.
     */
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    private boolean mobileAppStatus;
}
