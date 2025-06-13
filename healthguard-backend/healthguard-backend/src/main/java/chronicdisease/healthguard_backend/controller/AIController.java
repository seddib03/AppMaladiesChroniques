package chronicdisease.healthguard_backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chronicdisease.healthguard_backend.services.AIService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ai")
public class AIController {

    private final AIService aiService;

    public AIController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping(value = "/advice", consumes = "text/plain")
    public ResponseEntity<String> getAdvice(@RequestBody String userInput) {
        return ResponseEntity.ok(aiService.getMedicalAdvice(userInput));
    }

}

