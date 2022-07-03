package com.springrest.springrest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
public class CourseStoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(CourseStoreApplication.class, args);
		
		System.out.println("I will");
	}

}
