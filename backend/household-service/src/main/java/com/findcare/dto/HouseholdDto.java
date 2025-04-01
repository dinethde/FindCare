package com.findcare.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Email;
import lombok.Data;

@Data
public class HouseholdDto {
    private Long householdId;
    
    @NotNull(message = "auth0Identifier is required")
    private String auth0Identifier;
    
    private String useFor;
    
    @NotNull(message = "name is required")
    private String name;
    
    private String username;
    
    @NotNull(message = "email is required")
    @Email(message = "email must be valid")
    private String email;
    
    private String preferredLanguage;
}