package com.peopleware.recruitingApp.launch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
@RestController
@ComponentScan({ "com.peopleware.recruitingApp" })
@PropertySource("classpath:/application.properties")
public class RecruitingAppApplication {
	private static final Logger logger = LoggerFactory.getLogger(RecruitingAppApplication.class);

	public static void main(String[] args) {
		logger.info("\nAPI logs here\n");
		SpringApplication.run(RecruitingAppApplication.class, args);
		System.out.println("\n *********************** \n * API has Initialized * \n ***********************\n\n");
	}
}