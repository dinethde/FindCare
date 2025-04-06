package com.findcare.caregiver.entity.caregiver;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;


/**
 * Entity class representing a caregiver in the system.
 * This class maps to the "Caregiver" table in the database and contains
 * personal and professional information about caregivers.
 */
@Entity
@Table(name = "Caregiver")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Caregiver {
    /**
     * Primary key for the caregiver table.
     * This field is auto-generated using the IDENTITY strategy.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "caregiver_id")
    private Long caregiverId;
    /**
     * Username associated with the caregiver.
     */
    @Column(name = "username")
    private String username;

    /**
     * First name of the caregiver.
     */
    @Column(name = "f_name")
    private String firstName;

    /**
     * middle name of the caregiver.
     */
    @Column(name = "m_name")
    private String middleName;

    /**
     * Last name of the caregiver.
     */
    @Column(name = "l_name")
    private String lastName;

    @Column(name = "NIC_Number", unique = true, length = 20)
    private String nicNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender", columnDefinition = "gender_enum")
    private Gender gender;

    @Column(name = "age")
    private Integer age;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "hired_date")
    private LocalDate hiredDate;

    @Column(name = "AVG_CSR", precision = 3, scale = 2)
    private BigDecimal avgCsr;

    @Column(name = "total_Clients")
    private Integer totalClients;

    @Column(name = "profile_img", columnDefinition = "TEXT")
    private String profileImg;

    @Column(name = "agency_id")
    private Integer agencyId;

    @Column(name = "caregiver_account_id", nullable = false)
    private Integer caregiverAccountId;
}
