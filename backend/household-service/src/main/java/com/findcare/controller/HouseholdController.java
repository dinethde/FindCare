package com.findcare.controller;

import com.findcare.dto.User;
import com.findcare.service.HouseholdService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/household")
@RequiredArgsConstructor
public class HouseholdController {

    private final HouseholdService householdService;

    @PostMapping(value = "/", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String getHousehold(@ModelAttribute User user) {
        log.info(user.toString());
        User savedUser = householdService.createHousehold(user);
        return savedUser.toString() + " created";
    }
}
