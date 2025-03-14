package com.findcare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;

@Data
@Entity
@Table(name = "household")
public class HouseholdEntity {
    @Id
    @Column(name = "household_id")
    private Integer householdId;
    
    @Column(name = "auth0_identifier")
    private String auth0Identifier;
    
    @Column(name = "householdacc_id")
    private Integer householdaccId;
    
    @Column(name = "preferred_language")
    private String preferredLanguage;
}
