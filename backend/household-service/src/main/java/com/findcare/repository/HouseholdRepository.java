package com.findcare.repository;

import com.findcare.entity.HouseholdEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

/**
 * Repository interface for managing `HouseholdEntity` persistence.
 * This interface provides methods for performing CRUD operations and custom queries
 * on the "household" table in the database.
 * 
 * It extends the `JpaRepository` interface, which provides built-in methods for
 * common database operations such as saving, deleting, and finding entities.
 */
@Repository
public interface HouseholdRepository extends JpaRepository<HouseholdEntity, Long> {
    Optional<HouseholdEntity> findByAuth0Identifier(String auth0Identifier);
}
