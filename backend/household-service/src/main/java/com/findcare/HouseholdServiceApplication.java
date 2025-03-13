package com.findcare;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class HouseholdServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(HouseholdServiceApplication.class, args);
//        log.info("Household Service started successfully.");

    }

}
