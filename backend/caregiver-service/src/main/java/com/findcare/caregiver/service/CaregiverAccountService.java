package com.findcare.caregiver.service;

import java.util.Optional;

import com.findcare.caregiver.entity.CaregiverAccountEntity;
import com.findcare.caregiver.repository.CaregiverAccountRepository;
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

    public CaregiverAccount createCaregiver(CaregiverAccount caregiver) {
        log.info("Creating caregiver with email: {}", caregiver.getEmail());

        try {
            // Input validation
            if (caregiver.getEmail() == null || caregiver.getEmail().trim().isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email is required");
            }
            if (caregiver.getUniqueIdentifier() == null || caregiver.getUniqueIdentifier().trim().isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unique identifier is required");
            }

            // Check if caregiver already exists by email
            Optional<CaregiverAccountEntity> existingCaregiverByEmail = caregiverRepository
                    .findByEmail(caregiver.getEmail());
            if (existingCaregiverByEmail.isPresent()) {
                log.info("Caregiver with email {} already exists", caregiver.getEmail());
                throw new ResponseStatusException(
                        HttpStatus.CONFLICT,
                        String.format("Caregiver already exists with email: %s", caregiver.getEmail()));
            }

            // Check if caregiver already exists by uniqueIdentifier
            Optional<CaregiverAccountEntity> existingCaregiverByUniqueId = caregiverRepository
                    .findByUniqueIdentifier(caregiver.getUniqueIdentifier());
            if (existingCaregiverByUniqueId.isPresent()) {
                log.info("Caregiver with uniqueIdentifier {} already exists", caregiver.getUniqueIdentifier());
                throw new ResponseStatusException(
                        HttpStatus.CONFLICT,
                        String.format("Caregiver already exists with uniqueIdentifier: %s",
                                caregiver.getUniqueIdentifier()));
            }

            // Create new caregiver
            CaregiverAccountEntity caregiverToSave = modelMapper.map(caregiver, CaregiverAccountEntity.class);
            CaregiverAccountEntity savedEntity = caregiverRepository.save(caregiverToSave);
            log.info("Successfully created caregiver with ID: {}", savedEntity.getCaregiverId());

            return modelMapper.map(savedEntity, CaregiverAccount.class);
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation while creating caregiver", e);
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Database constraint violation occurred");
        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error while creating caregiver", e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Failed to create caregiver");
        }
    }

    public CaregiverAccount getCaregiverByUniqueIdentifier(String uniqueIdentifier) {
        log.info("Fetching caregiver with uniqueIdentifier: {}", uniqueIdentifier);

        try {
            // Input validation
            if (uniqueIdentifier == null || uniqueIdentifier.trim().isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unique identifier is required");
            }

            return caregiverRepository.findByUniqueIdentifier(uniqueIdentifier)
                    .map(entity -> modelMapper.map(entity, CaregiverAccount.class))
                    .orElseThrow(() -> {
                        log.error("Caregiver not found with uniqueIdentifier: {}", uniqueIdentifier);
                        return new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                String.format("Caregiver not found with uniqueIdentifier: %s", uniqueIdentifier));
                    });
        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error while fetching caregiver", e);
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "An unexpected error occurred while fetching the caregiver");
        }
    }
}
