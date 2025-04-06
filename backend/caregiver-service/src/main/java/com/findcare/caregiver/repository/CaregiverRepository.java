package com.findcare.caregiver.repository;

import com.findcare.caregiver.entity.caregiver.Caregiver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


/**
 * Repository interface for managing `Caregiver` entity persistence.
 * This interface provides methods for performing CRUD operations and custom queries
 * on the "Caregiver" table in the database.
 * 
 * It extends the `JpaRepository` interface, which provides built-in methods for
 * common database
 */
@Repository
public interface CaregiverRepository extends JpaRepository<Caregiver, Long> {

    /**
     * Finds a caregiver by their associated account ID.
     * 
     * @param caregiverAccountId The unique identifier of the caregiver's account
     * @return Optional containing the caregiver if found, empty otherwise
     * @deprecated This method can return multiple results. Use
     *             findAllByCaregiverAccountId instead.
     */
    @Deprecated
    Optional<Caregiver> findByCaregiverAccountId(Integer caregiverAccountId);

    /**
     * Finds all caregivers associated with the given account ID.
     * 
     * @param caregiverAccountId The unique identifier of the caregiver's account
     * @return List of caregivers associated with the account ID
     */
    List<Caregiver> findAllByCaregiverAccountId(Integer caregiverAccountId);

    /**
     * Finds a caregiver by their NIC (National Identity Card) number.
     * 
     * @param nicNumber The NIC number of the caregiver
     * @return Optional containing the caregiver if found, empty otherwise
     */
    Optional<Caregiver> findByNicNumber(String nicNumber);
}