package com.findcare.dto;

import lombok.Data;

/**
 * Data Transfer Object (DTO) for representing household information.
 * This class is used to transfer household-related data between different layers of the application.
 * It includes fields such as household ID, user identifiers, and contact details.
 */
@Data
public class HouseholdDto {
    private Long householdId;
    private String auth0Identifier;
    private String useFor;
    private String name;
    private String username;
    private String email;
    private String preferredLanguage;
}