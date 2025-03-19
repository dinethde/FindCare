package com.findcare.agency.service;

import com.findcare.agency.dto.AccountDTO;
import com.findcare.agency.entity.AccountEntity;
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
        AccountEntity accountEntity = modelMapper.map(accountDTO, AccountEntity.class);
        AccountEntity savedAccount = accountRepository.save(accountEntity);
        return modelMapper.map(savedAccount, AccountDTO.class);
    }

    @Transactional(readOnly = true)
    public Optional<AccountDTO> getAccountById(Integer id) {
        return accountRepository.findById(id)
                .map(account -> modelMapper.map(account, AccountDTO.class));
    }
}