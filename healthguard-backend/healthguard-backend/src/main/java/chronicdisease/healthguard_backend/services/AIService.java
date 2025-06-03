package chronicdisease.healthguard_backend.services;

import org.springframework.ai.chat.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class AIService {

    private final ChatClient chatClient;

    public AIService(ChatClient chatClient) {
        this.chatClient = chatClient;
    }

    public String getMedicalAdvice(String userInput) {
        return chatClient.call(userInput);
    }
}
