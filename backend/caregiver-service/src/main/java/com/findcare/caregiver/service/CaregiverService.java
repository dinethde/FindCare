package com.findcare.caregiver.service;

import com.findcare.caregiver.dto.Caregiver;
import com.findcare.caregiver.repository.CaregiverRepository;
import com.findcare.caregiver.repository.CaregiverAccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

/**
 * Service class responsible for handling business logic related to caregivers.
 * This service manages caregiver creation, retrieval, and validation
 * operations.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class CaregiverService {
    private final CaregiverRepository caregiverRepository;
    private final CaregiverAccountRepository caregiverAccountRepository;
    private final ModelMapper modelMapper;

    /**
     * Creates a new caregiver in the system.
     * 
     * @param caregiver The caregiver DTO containing all required information
     * @return The created caregiver DTO with generated ID
     * @throws ResponseStatusException with NOT_FOUND if the caregiver account
     *                                 doesn't exist
     * @throws ResponseStatusException with CONFLICT if a caregiver with the same
     *                                 NIC already exists
     * @throws ResponseStatusException with INTERNAL_SERVER_ERROR for unexpected
     *                                 errors
     */
    @Transactional
    public Caregiver createCaregiver(Caregiver caregiver) {
        log.info("Creating caregiver with NIC: {}", caregiver.getNicNumber());

        try {
            // Validate caregiver account exists
            caregiverAccountRepository.findById(caregiver.getCaregiverAccountId())
                    .orElseThrow(() -> new ResponseStatusException(
                            HttpStatus.NOT_FOUND,
                            "Caregiver account not found with ID: " + caregiver.getCaregiverAccountId()));

            // Check if caregiver already exists with NIC
            if (caregiverRepository.findByNicNumber(caregiver.getNicNumber()).isPresent()) {
                throw new ResponseStatusException(
                        HttpStatus.CONFLICT,
                        "Caregiver already exists with NIC: " + caregiver.getNicNumber());
            }

            // Save the caregiver
            com.findcare.caregiver.entity.caregiver.Caregiver caregiverEntity = modelMapper.map(caregiver,
                    com.findcare.caregiver.entity.caregiver.Caregiver.class);
            com.findcare.caregiver.entity.caregiver.Caregiver savedEntity = caregiverRepository.save(caregiverEntity);
            log.info("Successfully created caregiver with ID: {}", savedEntity.getCaregiverId());

            return modelMapper.map(savedEntity, Caregiver.class);
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation while creating caregiver", e);
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Database constraint violation occurred");
        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error while creating caregiver", e);
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed to create caregiver");
        }
    }

    /**
     * Retrieves a caregiver by their account ID.
     * 
     * @param caregiverAccountId The account ID of the caregiver to retrieve
     * @return The caregiver DTO if found
     * @throws ResponseStatusException with NOT_FOUND if no caregiver is found with
     *                                 the given account ID
     * @throws ResponseStatusException with INTERNAL_SERVER_ERROR for unexpected
     *                                 errors
     */
    @Transactional(readOnly = true)
    public Caregiver getCaregiverByAccountId(Integer caregiverAccountId) {
        log.info("Fetching caregiver with account ID: {}", caregiverAccountId);

        try {
            return caregiverRepository.findByCaregiverAccountId(caregiverAccountId)
                    .map(entity -> modelMapper.map(entity, Caregiver.class))
                    .orElseThrow(() -> {
                        log.error("Caregiver not found with account ID: {}", caregiverAccountId);
                        return new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                String.format("Caregiver not found with account ID: %d", caregiverAccountId));
                    });
        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            log.error("Unexpected error while fetching caregiver", e);
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed to fetch caregiver");
        }
    }
}