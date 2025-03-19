package com.findcare.agency.service;

import com.findcare.agency.dto.AccountDTO;
import com.findcare.agency.entity.AccountEntity;
import com.findcare.agency.repository.AccountRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountService {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Transactional
    public AccountDTO createAccount(AccountDTO accountDTO) {
        if (accountRepository.existsByAuth0Identifier(accountDTO.getAuth0Identifier())) {
            throw new RuntimeException("Account with this Auth0 ID already exists");
        }
        if (accountRepository.existsByEmail(accountDTO.getEmail())) {
            throw new RuntimeException("Account with this email already exists");
        }

        AccountEntity accountEntity = new AccountEntity();
        accountEntity.setAuth0Identifier(accountDTO.getAuth0Identifier());
        accountEntity.setEmail(accountDTO.getEmail());
        accountEntity.setTier(accountDTO.getTier());

        AccountEntity savedAccount = accountRepository.save(accountEntity);
        return convertToDTO(savedAccount);
    }

    private AccountDTO convertToDTO(AccountEntity entity) {
        return new AccountDTO(
                entity.getAuth0Identifier(),
                entity.getEmail(),
                entity.getTier());
    }
}