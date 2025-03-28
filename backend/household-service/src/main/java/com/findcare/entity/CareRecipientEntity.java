package com.findcare.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.Period;

@Data
@Entity
@Table(name = "care_recipient")
public class CareRecipientEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "care_recipient_id")
    private Long careRecipientId;
    
    @Column(name = "f_name", nullable = false)
    private String firstName;
    
    @Column(name = "l_name", nullable = false)
    private String lastName;
    
    @Column(name = "dob")
    private LocalDate dob;
    
    @Column(name = "age")
    private Integer age;
    
    @Column(name = "gender")
    private String gender;
    
    @Column(name = "weight", columnDefinition = "numeric")
    private Double weight;
    
    @Column(name = "height", columnDefinition = "numeric")
    private Double height;
    
    @Column(name = "about")
    private String about;
    
    @Column(name = "image")
    private String image;
    
    @ManyToOne
    @JoinColumn(name = "household_id")
    private HouseholdEntity household;
    
    // Helper method to calculate age from DOB
    @PrePersist
    @PreUpdate
    public void calculateAge() {
        if (dob != null) {
            this.age = Period.between(dob, LocalDate.now()).getYears();
        }
    }
}