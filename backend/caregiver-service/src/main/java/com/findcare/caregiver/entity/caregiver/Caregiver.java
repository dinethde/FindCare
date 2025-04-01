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
 * Contains personal and professional information about caregivers registered in
 * the FindCare platform.
 */
@Entity
@Table(name = "Caregiver")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Caregiver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "caregiver_id")
    private Integer caregiverId;

    @Column(name = "username")
    private String username;

    @Column(name = "f_name")
    private String firstName;

    @Column(name = "m_name")
    private String middleName;

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
