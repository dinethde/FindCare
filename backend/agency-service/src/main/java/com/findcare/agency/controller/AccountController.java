package com.findcare.agency.controller;

import com.findcare.agency.dto.AccountDTO;
import com.findcare.agency.dto.ApiResponse;
import com.findcare.agency.service.AccountService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin(origins = "*") // Allow requests from any origin
@Slf4j
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<AccountDTO>> createAccount(@Valid @RequestBody AccountDTO accountDTO) {
        log.info("Received account creation request");
        AccountDTO createdAccount = accountService.createAccount(accountDTO);
        ApiResponse<AccountDTO> response = ApiResponse.success("Account created or retrieved successfully",
                createdAccount);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<AccountDTO>> getAccountById(@RequestParam Integer id) {
        log.info("Received request to get account by ID: {}", id);
        AccountDTO account = accountService.getAccountById(id);
        ApiResponse<AccountDTO> response = ApiResponse.success("Account retrieved successfully", account);
        return ResponseEntity.ok(response);
    }
}