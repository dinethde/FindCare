package com.findcare.dto;

import lombok.Data;

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