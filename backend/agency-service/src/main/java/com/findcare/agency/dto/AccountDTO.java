package com.findcare.agency.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * Data Transfer Object (DTO) representing an account in the system.
 * This class is used to transfer account-related data between the service layer and client applications.
 * It includes fields for account identification, authentication, and contact details.
 */
@Data
public class AccountDTO {
    private Integer accountId;

    private String auth0Identifier;

    @NotBlank(message = "Email cannot be empty")
    @Email(message = "Please provide a valid email address")
    private String email;
}