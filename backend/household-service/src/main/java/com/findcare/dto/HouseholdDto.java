package com.findcare.dto;

import lombok.Data;

/**
 * Data Transfer Object (DTO) representing a household.
 * This class is used for transferring household data between the service layer and client applications.
 * It includes fields for household identification, user details, and contact information.
 */
@Data
public class HouseholdDto {
    private Long householdId;
    /**
     * Identifier for the user in the Auth0 authentication system.
     */
    private String auth0Identifier;
    private String useFor;
    private String name;
    /**
     * Username associated with the household.
     */
    private String username;
    private String email;
    /**
     * Preferred language for communication with the household.
     */
    private String preferredLanguage;
}