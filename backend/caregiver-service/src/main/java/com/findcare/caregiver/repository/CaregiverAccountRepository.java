package com.findcare.caregiver.repository;

import com.findcare.caregiver.entity.CaregiverAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Repository interface for managing `CaregiverAccountEntity` persistence.
 * This interface provides methods for performing CRUD operations and custom queries
 * on the "caregiver_account" table in the database.
 * 
 * It extends the `JpaRepository` interface, which provides built-in methods for
 * common database operations such as saving, deleting, and finding entities.
 */
@Repository
public interface CaregiverAccountRepository extends JpaRepository<CaregiverAccountEntity, Integer> {

    Optional<CaregiverAccountEntity> findByEmail(String email);

    Optional<CaregiverAccountEntity> findByUniqueIdentifier(String uniqueIdentifier);
}