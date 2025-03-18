package com.findcare.agency.service;

import com.findcare.agency.dto.UserDTO;
import com.findcare.agency.entity.User;
import com.findcare.agency.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UserDTO createUser(UserDTO userDTO) {
        User user = new User(userDTO.getUserId(), userDTO.getUsername());
        User savedUser = userRepository.save(user);
        return new UserDTO() {
            {
                setUserId(savedUser.getUserId());
                setUsername(savedUser.getUsername());
            }
        };
    }
}