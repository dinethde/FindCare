package com.findcare.dto;

import lombok.Data;

@Data
public class User {
    private Integer householdId;
    private String auth0Identifier;
    private Integer householdaccId;
    private String preferredLanguage;
}
