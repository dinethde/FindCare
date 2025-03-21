package com.findcare.caregiver.dto;

import com.findcare.caregiver.entity.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Caregiver {
    private Long caregiverId;
    private String username;
    private String firstName;
    private String middleName;
    private String lastName;
    private String nicNumber;
    private Gender gender;
    private Integer age;
    private String description;
    private LocalDate hiredDate;
    private BigDecimal avgCsr;
    private Integer totalClients;
    private String profileImg;
    private Integer agencyId;
    private Integer caregiverAccountId;
}
