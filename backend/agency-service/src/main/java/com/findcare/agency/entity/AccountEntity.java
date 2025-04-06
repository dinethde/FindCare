package com.findcare.agency.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Entity class representing an agency account in the system.
 * This class maps to the "Agency_Account" table in the database and contains
 * account-related information such as unique identifiers and authentication details.
 */
@Entity
@Table(name = "Agency_Account")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "agency_account_seq")
    @SequenceGenerator(name = "agency_account_seq", sequenceName = "agency_account_seq", allocationSize = 1)
    @Column(name = "agency_account_id")
    private Integer accountId;

    @Column(name = "auth0_identifier", unique = true)
    private String auth0Identifier;

    @Column(unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    @Column(columnDefinition = "tier_enum")
    private TierEnum tier;
}