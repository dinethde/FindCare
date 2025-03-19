package com.findcare.caregiver.service;

import java.util.Optional;

import com.findcare.caregiver.entity.CaregiverAccountEntity;
import com.findcare.caregiver.repository.CaregiverRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import com.findcare.caregiver.dto.CaregiverAccount;
import org.modelmapper.ModelMapper;

@Service
@RequiredArgsConstructor
@Slf4j
public class CaregiverService {

    private final CaregiverRepository caregiverRepository;
    private final ModelMapper modelMapper;

    public CaregiverAccount createCaregiver(CaregiverAccount caregiver) {
        log.info("Ceating caregiver with email: {}", caregiver.getEmail());

        // Check if caregiver already exists by email and if exits, return existing
        // caregiver
        Optional<CaregiverAccountEntity> existingCaregiverByEmail = caregiverRepository
                .findByEmail(caregiver.getEmail());
        if (existingCaregiverByEmail.isPresent()) {
            log.info("Caregiver with email {} already exists, returning existing caregiver", caregiver.getEmail());
            return modelMapper.map(existingCaregiverByEmail.get(), CaregiverAccount.class);
        }

        // Check if caregiver already exists by uniqueIdentifier If exists, return
        // existing caregiver
        Optional<CaregiverAccountEntity> existingCaregiverByUniqueId = caregiverRepository
                .findByUniqueIdentifier(caregiver.getUniqueIdentifier());
        if (existingCaregiverByUniqueId.isPresent()) {
            log.info("Caregiver with uniqueIdentifier {} already exists, returning existing caregiver",
                    caregiver.getUniqueIdentifier());
            return modelMapper.map(existingCaregiverByUniqueId.get(), CaregiverAccount.class);
        }

        // Create new caregiver if not exists
        log.info("Creating new caregiver with email: {}", caregiver.getEmail());
        CaregiverAccountEntity caregiverToSave = modelMapper.map(caregiver, CaregiverAccountEntity.class);
        CaregiverAccountEntity caregiverEntity = caregiverRepository.save(caregiverToSave);

        return modelMapper.map(caregiverEntity, CaregiverAccount.class);

    }
}
