package com.findcare.agency;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@Slf4j
public class AgencyServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgencyServiceApplication.class, args);
		log.info("Agency Service started");
	}
}

  