package com.findcare.entity;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Entity class representing phone contact information in the system.
 * This class maps to the 'phone' table in the database.
 */
@Data
@Entity
@Table(name = "phone")
public class PhoneEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "phone_id")
    private Long phoneId;
    // eivniebv
    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "land_phone")
    private String landPhone;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "household_id")
    private HouseholdEntity household;
}