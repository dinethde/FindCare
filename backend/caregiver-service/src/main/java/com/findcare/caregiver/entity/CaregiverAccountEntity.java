package com.findcare.caregiver.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;

/**
 * Entity class representing a caregiver account in the system.
 * This class maps to the "caregiver_account" table in the database and contains
 * account-related information such as unique identifiers and contact details.
 */
@Entity
@Table(name = "caregiver_account")
@Data
public class CaregiverAccountEntity {

    /**
     * Primary key for the caregiver account table.
     * This field is auto-generated using the IDENTITY strategy.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "caregiver_account_id")
    private Integer caregiverId;

    /**
     * A unique identifier for the caregiver account, such as a username or external system ID.
     * This field is unique to ensure no duplicate identifiers exist.
     */
    @Column(name = "unique_identifier", unique = true)
    private String uniqueIdentifier;

    /**
     * Email address associated with the caregiver account.
     * This field is unique and cannot be null.
     */
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "mobile_app_status")
    private String mobileAppStatus;
}