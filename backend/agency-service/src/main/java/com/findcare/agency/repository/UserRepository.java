package com.findcare.agency.repository;

import com.findcare.agency.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    UserEntity findByUniqueIdentifier(String uniqueIdentifier);
}