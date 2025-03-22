package com.findcare.caregiver.service;

import java.util.Optional;

import com.findcare.caregiver.entity.CaregiverAccountEntity;
import com.findcare.caregiver.repository.CaregiverAccountRepository;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import com.findcare.caregiver.dto.CaregiverAccount;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
@Slf4j
public class CaregiverAccountService {

    private final CaregiverAccountRepository caregiverRepository;
    private final ModelMapper modelMapper;

    public CaregiverAccount createCaregiver(CaregiverAccount caregiverAccount) {
        log.info("Creating caregiver account with email: {}", caregiverAccount.getEmail());

        try {
            // Input validation
            if (caregiverAccount.getEmail() == null || caregiverAccount.getEmail().trim().isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email is required");
            }
            if (caregiverAccount.getUniqueIdentifier() == null
                    || caregiverAccount.getUniqueIdentifier().trim().isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unique identifier is required");
            }

            // Check if caregiver already exists by email
            Optional<CaregiverAccountEntity> existingCaregiverByEmail = caregiverRepository
                    .findByEmail(caregiverAccount.getEmail());
            if (existingCaregiverByEmail.isPresent()) {
                log.info("Caregiver account with email {} already exists", caregiverAccount.getEmail());
                throw new ResponseStatusException(
                        HttpStatus.CONFLICT,
                        String.format("Caregiver account already exists with email: %s", caregiverAccount.getEmail()));
            }

            // Check if caregiver already exists by uniqueIdentifier
            Optional<CaregiverAccountEntity> existingCaregiverByUniqueId = caregiverRepository
                    .findByUniqueIdentifier(caregiverAccount.getUniqueIdentifier());
            if (existingCaregiverByUniqueId.isPresent()) {
                log.info("Caregiver account with uniqueIdentifier {} already exists",
                        caregiverAccount.getUniqueIdentifier());
                throw new ResponseStatusException(
                        HttpStatus.CONFLICT,
                        String.format("Caregiver account already exists with uniqueIdentifier: %s",
                                caregiverAccount.getUniqueIdentifier()));
            }

            // Create new caregiver account
            CaregiverAccountEntity caregiverToSave = modelMapper.map(caregiverAccount, CaregiverAccountEntity.class);
            CaregiverAccountEntity savedEntity = caregiverRepository.save(caregiverToSave);
            log.info("Successfully created caregiver account with ID: {}", savedEntity.getCaregiverId());

            return modelMapper.map(savedEntity, CaregiverAccount.class);
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation while creating caregiver account", e);
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Database constraint violation occurred");
        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error while creating caregiver account", e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to create caregiver account");
        }
    }

    public CaregiverAccount getCaregiverByUniqueIdentifier(String uniqueIdentifier) {
        log.info("Fetching caregiver account with uniqueIdentifier: {}", uniqueIdentifier);

        try {
            // Input validation
            if (uniqueIdentifier == null || uniqueIdentifier.trim().isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unique identifier is required");
            }

            return caregiverRepository.findByUniqueIdentifier(uniqueIdentifier)
                    .map(entity -> modelMapper.map(entity, CaregiverAccount.class))
                    .orElseThrow(() -> {
                        log.error("Caregiver account not found with uniqueIdentifier: {}", uniqueIdentifier);
                        return new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                String.format("Caregiver account not found with uniqueIdentifier: %s",
                                        uniqueIdentifier));
                    });
        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error while fetching caregiver account", e);
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "An unexpected error occurred while fetching the caregiver account");
        }
    }
}
