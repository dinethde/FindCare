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
    /**
     * Finds a household entity by its Auth0 identifier.
     * 
     * @param auth0Identifier The Auth0 identifier of the household.
     * @return An `Optional` containing the `HouseholdEntity` if found, or empty if not found.
     */
    Optional<HouseholdEntity> findByAuth0Identifier(String auth0Identifier);
}
