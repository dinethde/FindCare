package com.findcare.caregiver.dto;

import com.findcare.caregiver.entity.caregiver.*;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Data Transfer Object (DTO) representing a caregiver.
 * Used for transferring caregiver data between the service layer and client
 * applications.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Caregiver {
    /**
     * Unique identifier for the caregiver
     */
    private Long caregiverId;

    /**
     * Associated account ID in the authentication system
     */
    @NotNull(message = "Caregiver account ID is required")
    private Integer caregiverAccountId;

    /**
     * National Identity Card number
     */
    @NotBlank(message = "NIC number is required")
    @Pattern(regexp = "^[0-9]{9}[vVxX]$|^[0-9]{12}$", message = "Invalid NIC format")
    private String nicNumber;

    /**
     * First name of the caregiver
     */
    @NotBlank(message = "First name is required")
    @Size(min = 2, max = 50, message = "First name must be between 2 and 50 characters")
    private String firstName;

    /**
     * Last name of the caregiver
     */
    @NotBlank(message = "Last name is required")
    @Size(min = 2, max = 50, message = "Last name must be between 2 and 50 characters")
    private String lastName;

    /**
     * Date of birth
     */
    @NotNull(message = "Date of birth is required")
    @Past(message = "Date of birth must be in the past")
    private LocalDate dateOfBirth;

    /**
     * Contact phone number
     */
    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^\\+?[0-9]{10,12}$", message = "Invalid phone number format")
    private String phoneNumber;

    /**
     * Residential address
     */
    @NotBlank(message = "Address is required")
    @Size(max = 200, message = "Address must not exceed 200 characters")
    private String address;

    /**
     * Years of caregiving experience
     */
    @NotNull(message = "Years of experience is required")
    @Min(value = 0, message = "Years of experience cannot be negative")
    private Integer yearsOfExperience;

    /**
     * Professional background description
     */
    @Size(max = 1000, message = "Description must not exceed 1000 characters")
    private String description;

    /**
     * Hourly rate for services
     */
    @NotNull(message = "Hourly rate is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Hourly rate must be greater than 0")
    private BigDecimal hourlyRate;

    /**
     * Record creation timestamp
     */
    private LocalDateTime createdAt;

    /**
     * Last update timestamp
     */
    private LocalDateTime updatedAt;
}
