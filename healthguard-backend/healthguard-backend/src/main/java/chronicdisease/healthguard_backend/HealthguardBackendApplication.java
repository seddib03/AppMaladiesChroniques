package chronicdisease.healthguard_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class HealthguardBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthguardBackendApplication.class, args);
	}

}
