package com.findcare.caregiver.dto;

import com.findcare.caregiver.entity.caregiver.Gender;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * Data Transfer Object (DTO) representing a caregiver.
 * This class is used for transferring caregiver data between the service layer and client applications.
 * It includes fields for caregiver identification, personal details, and other relevant information.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Caregiver {
    /**
     * Unique identifier for the caregiver.
     */
    private Long caregiverId;

    private String username;

    @Size(max = 255, message = "First name must not exceed 255 characters")
    private String firstName;

    @Size(max = 255, message = "Middle name must not exceed 255 characters")
    private String middleName;

    @Size(max = 255, message = "Last name must not exceed 255 characters")
    private String lastName;

    @NotBlank(message = "NIC number is required")
    @Size(max = 20, message = "NIC number must not exceed 20 characters")
    @Pattern(regexp = "^[0-9]{9}[vVxX]$|^[0-9]{12}$", message = "Invalid NIC format")
    private String nicNumber;

    @NotNull(message = "Gender is required")
    private Gender gender;

    private Integer age;

    private String description;

    private LocalDate hiredDate;

    @DecimalMin(value = "0.0", message = "Average CSR cannot be negative")
    @DecimalMax(value = "5.0", message = "Average CSR cannot be greater than 5.0")
    @Digits(integer = 1, fraction = 2, message = "AVG_CSR must have at most 1 integer digit and 2 decimal places")
    private BigDecimal avgCsr;

    @Min(value = 0, message = "Total clients cannot be negative")
    private Integer totalClients;

    private String profileImg;

    private Integer agencyId;

    @NotNull(message = "Caregiver account ID is required")
    private Integer caregiverAccountId;
}
