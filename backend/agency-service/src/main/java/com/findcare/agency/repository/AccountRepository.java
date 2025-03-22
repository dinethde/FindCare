package com.findcare.agency.repository;

import com.findcare.agency.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<AccountEntity, Integer> {
    Optional<AccountEntity> findByEmail(String email);

    Optional<AccountEntity> findByAuth0Identifier(String auth0Identifier);
}