package com.findcare.agency;

import org.springframework.boot.SpringApplication;

public class TestAgencyServiceApplication {

	public static void main(String[] args) {
		SpringApplication.from(AgencyServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
