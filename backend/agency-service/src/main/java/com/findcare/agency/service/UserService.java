package com.findcare.agency.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.findcare.agency.dto.UserDTO;
import com.findcare.agency.entity.UserEntity;
import com.findcare.agency.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    public UserDTO createUser(UserDTO userDTO) {
        // Check if user already exists
        UserEntity existingUser = userRepository.findByUniqueIdentifier(userDTO.getUniqueIdentifier());
        if (existingUser != null) {
            log.info("User already exists with ID: {}", existingUser.getUserId());
            return objectMapper.convertValue(existingUser, UserDTO.class);
        }

        UserEntity savedUser = userRepository.save(
                objectMapper.convertValue(userDTO, UserEntity.class));

        log.info("New user created with ID: {}", savedUser.getUserId());
        return objectMapper.convertValue(savedUser, UserDTO.class);
    }
}