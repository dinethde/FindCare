package com.findcare.agency.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Integer userId;
    private String uniqueIdentifier;
    private String username;
}