package com.findcare.repository;

import com.findcare.entity.HouseholdEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface HouseholdRepository extends JpaRepository<HouseholdEntity, Long> {
    Optional<HouseholdEntity> findByAuth0Identifier(String auth0Identifier);
}
