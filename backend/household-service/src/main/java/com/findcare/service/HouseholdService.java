package com.findcare.service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.findcare.dto.User;
import com.findcare.entity.HouseholdEntity;
import com.findcare.repository.HouseholdRepository;
import lombok.RequiredArgsConstructor;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HouseholdService {
 
    private final HouseholdRepository householdRepository;
    private final ObjectMapper objectMapper;
    
    // create household
    @Transactional
    public User createHousehold(User user) {
        HouseholdEntity entity = objectMapper.convertValue(user, HouseholdEntity.class);


        HouseholdEntity returnEntity = householdRepository.save(entity);
        User returnUser = objectMapper.convertValue(returnEntity, User.class);
        return returnUser;
    }
}