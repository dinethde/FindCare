package com.findcare.agency.service;

import com.findcare.agency.dto.AccountDTO;
import com.findcare.agency.entity.AccountEntity;
import com.findcare.agency.exception.ResourceNotFoundException;
import com.findcare.agency.repository.AccountRepository;
import org.modelmapper.ModelMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Slf4j
public class AccountService {
    private final AccountRepository accountRepository;
    private final ModelMapper modelMapper;

    public AccountService(AccountRepository accountRepository, ModelMapper modelMapper) {
        this.accountRepository = accountRepository;
        this.modelMapper = modelMapper;
    }

    @Transactional
    public AccountDTO createAccount(AccountDTO accountDTO) {
        log.info("Processing account creation request for email: {}", accountDTO.getEmail());

        try {
            // Check if account already exists by email
            Optional<AccountEntity> existingAccountByEmail = accountRepository.findByEmail(accountDTO.getEmail());

            if (existingAccountByEmail.isPresent()) {
                log.info("Account with email {} already exists, returning existing account", accountDTO.getEmail());
                return modelMapper.map(existingAccountByEmail.get(), AccountDTO.class);
            }

            // Check if account already exists by auth0_identifier
            if (accountDTO.getAuth0Identifier() != null && !accountDTO.getAuth0Identifier().isEmpty()) {
                Optional<AccountEntity> existingAccountByAuth0Id = accountRepository
                        .findByAuth0Identifier(accountDTO.getAuth0Identifier());
                if (existingAccountByAuth0Id.isPresent()) {
                    log.info("Account with auth0_identifier {} already exists, returning existing account",
                            accountDTO.getAuth0Identifier());
                    return modelMapper.map(existingAccountByAuth0Id.get(), AccountDTO.class);
                }
            }

            log.info("Creating new account for email: {}", accountDTO.getEmail());
            AccountEntity accountEntity = modelMapper.map(accountDTO, AccountEntity.class);
            AccountEntity savedAccount = accountRepository.save(accountEntity);
            return modelMapper.map(savedAccount, AccountDTO.class);
        } catch (Exception e) {
            log.error("Error creating account: {}", e.getMessage(), e);
            throw e; // Let the global exception handler deal with it
        }
    }

    @Transactional(readOnly = true)
    public AccountDTO getAccountById(Integer id) {
        log.info("Fetching account by ID: {}", id);

        try {
            return accountRepository.findById(id)
                    .map(account -> {
                        log.info("Account found with ID: {}", id);
                        return modelMapper.map(account, AccountDTO.class);
                    })
                    .orElseThrow(() -> {
                        log.warn("Account not found with ID: {}", id);
                        return new ResourceNotFoundException("Account", "id", id);
                    });
        } catch (ResourceNotFoundException e) {
            throw e; // Pass custom exceptions through
        } catch (Exception e) {
            log.error("Error retrieving account with ID {}: {}", id, e.getMessage(), e);
            throw e; // Let the global exception handler deal with it
        }
    }
}