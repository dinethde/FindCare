package com.findcare.caregiver.service;

import com.findcare.caregiver.dto.Caregiver;
import com.findcare.caregiver.exception.BusinessRuleViolationException;
import com.findcare.caregiver.exception.ResourceAlreadyExistsException;
import com.findcare.caregiver.exception.ResourceNotFoundException;
import com.findcare.caregiver.repository.CaregiverRepository;
import com.findcare.caregiver.repository.CaregiverAccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

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
     * @throws ResourceNotFoundException      if the caregiver account doesn't exist
     * @throws ResourceAlreadyExistsException if a caregiver with the same NIC
     *                                        already exists
     * @throws BusinessRuleViolationException if a caregiver already exists with the
     *                                        same account ID
     */
    @Transactional
    public Caregiver createCaregiver(Caregiver caregiver) {
        log.info("Creating caregiver with NIC: {}", caregiver.getNicNumber());

        // Validate caregiver account exists
        caregiverAccountRepository.findById(caregiver.getCaregiverAccountId())
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Caregiver account", "ID", caregiver.getCaregiverAccountId()));

        // Check if caregiver already exists with the same account ID
        List<com.findcare.caregiver.entity.caregiver.Caregiver> existingCaregivers = caregiverRepository
                .findAllByCaregiverAccountId(caregiver.getCaregiverAccountId());

        if (!existingCaregivers.isEmpty()) {
            log.warn("Attempting to create multiple caregivers for account ID: {}", caregiver.getCaregiverAccountId());
            throw new BusinessRuleViolationException(
                    "Caregiver", "account ID", caregiver.getCaregiverAccountId(),
                    "A caregiver is already associated with this account");
        }

        // Check if caregiver already exists with NIC
        if (caregiverRepository.findByNicNumber(caregiver.getNicNumber()).isPresent()) {
            throw new ResourceAlreadyExistsException(
                    "Caregiver", "NIC", caregiver.getNicNumber());
        }

        try {
            // Save the caregiver
            com.findcare.caregiver.entity.caregiver.Caregiver caregiverEntity = modelMapper.map(caregiver,
                    com.findcare.caregiver.entity.caregiver.Caregiver.class);
            com.findcare.caregiver.entity.caregiver.Caregiver savedEntity = caregiverRepository.save(caregiverEntity);
            log.info("Successfully created caregiver with ID: {}", savedEntity.getCaregiverId());

            // Explicitly ensure caregiverId is set in the returned DTO
            Caregiver resultDTO = modelMapper.map(savedEntity, Caregiver.class);
            log.info("Mapped entity to DTO with caregiverId: {}", resultDTO.getCaregiverId());

            return resultDTO;
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation while creating caregiver", e);
            throw new ResourceAlreadyExistsException("Database constraint violation occurred");
        }
    }

    /**
     * Retrieves a caregiver by their ID.
     * 
     * @param caregiverId The ID of the caregiver to retrieve
     * @return The caregiver DTO if found
     * @throws ResourceNotFoundException if no caregiver is found with the given ID
     */
    @Transactional(readOnly = true)
    public Caregiver getCaregiverById(Integer caregiverId) {
        log.info("Fetching caregiver with ID: {}", caregiverId);

        return caregiverRepository.findById(caregiverId)
                .map(entity -> {
                    log.info("Successfully retrieved caregiver with ID: {}", caregiverId);
                    return modelMapper.map(entity, Caregiver.class);
                })
                .orElseThrow(() -> {
                    log.error("Caregiver not found with ID: {}", caregiverId);
                    return new ResourceNotFoundException("Caregiver", "ID", caregiverId);
                });
    }

    /**
     * Retrieves a caregiver by their account ID.
     * 
     * @param caregiverAccountId The account ID of the caregiver to retrieve
     * @return The caregiver DTO if found
     * @throws ResourceNotFoundException if no caregiver is found with the given
     *                                   account ID
     * @deprecated Use {@link #getCaregiverById(Integer)} instead
     */
    @Deprecated
    @Transactional(readOnly = true)
    public Caregiver getCaregiverByAccountId(Integer caregiverAccountId) {
        log.info("Fetching caregiver with account ID: {}", caregiverAccountId);

        List<com.findcare.caregiver.entity.caregiver.Caregiver> caregivers = caregiverRepository
                .findAllByCaregiverAccountId(caregiverAccountId);

        if (caregivers.isEmpty()) {
            log.error("Caregiver not found with account ID: {}", caregiverAccountId);
            throw new ResourceNotFoundException("Caregiver", "account ID", caregiverAccountId);
        } else if (caregivers.size() > 1) {
            // This is a data integrity issue that should be reported but still return the
            // first entry
            log.warn("Multiple caregivers found for account ID: {}. This indicates a data integrity issue.",
                    caregiverAccountId);
            // We'll return the first one to maintain backward compatibility
        }

        return modelMapper.map(caregivers.get(0), Caregiver.class);
    }

    /**
     * Retrieves all caregivers from the database.
     * 
     * @return List of all caregivers in the system
     */
    @Transactional(readOnly = true)
    public List<Caregiver> getAllCaregivers() {
        log.info("Fetching all caregivers from database");

        List<Caregiver> caregivers = caregiverRepository.findAll().stream()
                .map(entity -> modelMapper.map(entity, Caregiver.class))
                .collect(Collectors.toList());

        log.info("Successfully retrieved {} caregivers", caregivers.size());
        return caregivers;
    }
}