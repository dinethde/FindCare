package com.findcare.agency.dto;

import com.findcare.agency.entity.TierEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountDTO {
    private String auth0Identifier;
    private String email;
    private TierEnum tier;
}