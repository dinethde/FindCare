package com.findcare.caregiver.repository;

import com.findcare.caregiver.entity.caregiver.Caregiver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repository interface for managing Caregiver entities in the database.
 * Provides standard JPA operations and custom query methods for
 * caregiver-specific operations.
 */
@Repository
public interface CaregiverRepository extends JpaRepository<Caregiver, Long> {

    /**
     * Finds a caregiver by their associated account ID.
     * 
     * @param caregiverAccountId The unique identifier of the caregiver's account
     * @return Optional containing the caregiver if found, empty otherwise
     */
    Optional<Caregiver> findByCaregiverAccountId(Integer caregiverAccountId);

    /**
     * Finds a caregiver by their NIC (National Identity Card) number.
     * 
     * @param nicNumber The NIC number of the caregiver
     * @return Optional containing the caregiver if found, empty otherwise
     */
    Optional<Caregiver> findByNicNumber(String nicNumber);
}