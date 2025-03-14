package com.findcare.repository;

import com.findcare.entity.HouseholdEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HouseholdRepository extends JpaRepository<HouseholdEntity, Integer> {
}
