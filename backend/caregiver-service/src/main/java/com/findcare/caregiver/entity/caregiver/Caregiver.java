package com.findcare.caregiver.entity.caregiver;

import com.findcare.caregiver.Entity.caregiver.Gender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "Caregiver")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Caregiver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "caregiver_id")
    private Long caregiverId;

    private String username;

    @Column(name = "f_name")
    private String firstName;

    @Column(name = "m_name")
    private String middleName;

    @Column(name = "l_name")
    private String lastName;

    @Column(name = "NIC_Number", unique = true)
    private String nicNumber;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Integer age;
    private String description;

    @Column(name = "hired_date")
    private LocalDate hiredDate;

    @Column(name = "AVG_CSR", precision = 3, scale = 2)
    private BigDecimal avgCsr;

    @Column(name = "total_Clients")
    private Integer totalClients;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "agency_id")
    private Integer agencyId;

    @Column(name = "caregiver_account_id", nullable = false)
    private Integer caregiverAccountId;
}
