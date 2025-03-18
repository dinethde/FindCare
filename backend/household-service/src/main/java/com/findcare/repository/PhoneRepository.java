package com.findcare.repository;

import com.findcare.entity.PhoneEntity;
import com.findcare.entity.HouseholdEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PhoneRepository extends JpaRepository<PhoneEntity, Long> {
    List<PhoneEntity> findByHousehold(HouseholdEntity household);
}