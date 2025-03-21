package com.findcare.caregiver.repository;

import com.findcare.caregiver.entity.CaregiverAccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CaregiverRepository extends JpaRepository<CaregiverAccountEntity, Integer> {

    Optional<CaregiverAccountEntity> findByEmail(String email);

    Optional<CaregiverAccountEntity> findByUniqueIdentifier(String uniqueIdentifier);
}