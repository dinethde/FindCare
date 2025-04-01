package com.findcare.repository;

import com.findcare.entity.CareRecipientEntity;
import com.findcare.entity.HouseholdEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CareRecipientRepository extends JpaRepository<CareRecipientEntity, Long> {
    List<CareRecipientEntity> findByHousehold(HouseholdEntity household);
    Optional<CareRecipientEntity> findByHouseholdAndCareRecipientId(HouseholdEntity household, Long careRecipientId);
}