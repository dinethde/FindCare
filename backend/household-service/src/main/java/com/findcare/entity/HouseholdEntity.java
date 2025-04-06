package com.findcare.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;

/**
 * Entity class representing the "household" table in the database.
 * This class maps the database table columns to Java fields and provides
 * an object-oriented representation of the household data.
 */
@Data
@Entity
@Table(name = "household")
public class HouseholdEntity {
    /**
     * Primary key for the household table.
     * This field is auto-generated using the IDENTITY strategy.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "household_id")
    private Long householdId;
    
    @Column(name = "auth0_identifier")
    private String auth0Identifier;
    
    @Column(name = "use_for")
    private String useFor;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "username")
    private String username;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "preferred_language")
    private String preferredLanguage;
}
