package com.findcare.agency.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Agency_Account")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "agency_account_seq")
    @SequenceGenerator(name = "agency_account_seq", sequenceName = "agency_account_seq", allocationSize = 1)
    @Column(name = "account_id")
    private Integer accountId;

    @Column(name = "auth0_identifier", unique = true)
    private String auth0Identifier;

    @Column(unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    private TierEnum tier;
}