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
    
    /**
     * Identifier for the user in the Auth0 authentication system.
     */
    @Column(name = "auth0_identifier")
    private String auth0Identifier;
    
    /**
     * Purpose or usage context of the household (e.g., residential, commercial).
     */
    @Column(name = "use_for")
    private String useFor;
    
    /**
     * Name of the household or household owner.
     */
    @Column(name = "name")
    private String name;
    
    /**
     * Username associated with the household.
     */
    @Column(name = "username")
    private String username;
    
    /**
     * Email address associated with the household.
     */
    @Column(name = "email")
    private String email;
    
    /**
     * Preferred language for communication with the household.
     */
    @Column(name = "preferred_language")
    private String preferredLanguage;
}
