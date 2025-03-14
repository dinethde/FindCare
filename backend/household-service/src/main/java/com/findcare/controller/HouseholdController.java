package com.findcare.controller;

import com.findcare.dto.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/household")
public class HouseholdController {

    @PostMapping(value = "/", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String getHousehold(@ModelAttribute User user) {
        String message = "Household for user " + user.getEmail() + " is found";
        log.info(user.toString());
        return message;
    }
}
