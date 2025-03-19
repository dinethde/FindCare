package com.findcare.caregiver;

import org.springframework.boot.SpringApplication;

public class TestCaregiverServiceApplication {

	public static void main(String[] args) {
		SpringApplication.from(CaregiverServiceApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
