package com.findcare.caregiver.entity.caregiver;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Entity class representing a caregiver in the system.
 * Contains personal and professional information about caregivers registered in
 * the FindCare platform.
 */
@Entity
@Table(name = "caregivers")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Caregiver {
    /**
     * Unique identifier for the caregiver
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long caregiverId;

    /**
     * Foreign key referencing the caregiver's account in the authentication system
     */
    @Column(unique = true, nullable = false)
    private Integer caregiverAccountId;

    /**
     * National Identity Card number of the caregiver
     */
    @Column(unique = true, nullable = false)
    private String nicNumber;

    /**
     * First name of the caregiver
     */
    @Column(nullable = false)
    private String firstName;

    /**
     * Last name of the caregiver
     */
    @Column(nullable = false)
    private String lastName;

    /**
     * Date of birth of the caregiver
     */
    @Column(nullable = false)
    private LocalDate dateOfBirth;

    /**
     * Contact phone number for the caregiver
     */
    @Column(nullable = false)
    private String phoneNumber;

    /**
     * Current residential address of the caregiver
     */
    @Column(nullable = false)
    private String address;

    /**
     * Years of experience in caregiving
     */
    @Column(nullable = false)
    private Integer yearsOfExperience;

    /**
     * Brief description of the caregiver's background and expertise
     */
    @Column(length = 1000)
    private String description;

    /**
     * Hourly rate charged by the caregiver for their services
     */
    @Column(nullable = false)
    private BigDecimal hourlyRate;

    /**
     * Creation timestamp of the caregiver record
     */
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    /**
     * Last update timestamp of the caregiver record
     */
    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
