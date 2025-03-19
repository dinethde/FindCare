package com.findcare.agency.dto;

import lombok.Data;

@Data
public class AccountDTO {
    private Integer accountId;
    private String auth0Identifier;
    private String email;
}