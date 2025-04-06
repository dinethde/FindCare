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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "caregiver_account_id")
    private Integer caregiverId;

    @Column(name = "unique_identifier", unique = true)
    private String uniqueIdentifier;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "mobile_app_status")
    private String mobileAppStatus;
}