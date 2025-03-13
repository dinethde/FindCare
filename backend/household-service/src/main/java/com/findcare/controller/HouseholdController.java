package com.findcare.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class HouseholdController {

    @GetMapping("/")
    public String home() {
//        log.info("Request reveived for Household Service");
        return "Welcome to Household Service!";
    }

    @PostMapping("/")
    public String postHome(){
        return "Welcome to POST Household Service!";
    }
}
