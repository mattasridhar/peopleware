package com.peopleware.recruitingApp.launch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.peopleware.recruitingApp")
public class WebConfiguration implements WebMvcConfigurer {

	private static final Logger logger = LoggerFactory.getLogger(RecruitingAppApplication.class);

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		logger.info("API log CORS");
		registry.addMapping("/**").allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
	}

}