package chronicdisease.healthguard_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import chronicdisease.healthguard_backend.model.User;
import chronicdisease.healthguard_backend.services.UserService;
import chronicdisease.healthguard_backend.security.JwtUtil;
import chronicdisease.healthguard_backend.payload.LoginRequest;
import chronicdisease.healthguard_backend.payload.RegisterRequest;
import chronicdisease.healthguard_backend.repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
	@Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        User user = userService.findByUsername(username);

        if (user == null) {
            System.out.println("Utilisateur non trouvé : " + username);
            return ResponseEntity.status(401).body("Utilisateur non trouvé");
        }

        System.out.println("Mot de passe fourni : " + password);
        System.out.println("Mot de passe en base (encodé) : " + user.getPassword());

        if (!passwordEncoder.matches(password, user.getPassword())) {
            System.out.println("Mot de passe incorrect pour l'utilisateur : " + username);
            return ResponseEntity.status(401).body("Mot de passe incorrect");
        }

        String token = jwtUtil.generateToken(username);

        return ResponseEntity.ok(Map.of("token", token));
    }
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            return ResponseEntity.badRequest().body(Map.of("message", "Nom d'utilisateur déjà utilisé."));
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setAge(request.getAge());
        user.setGender(request.getGender());
        user.setDiseaseType(request.getDiseaseType());
        user.setMedicalHistory(request.getMedicalHistory());

        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "Inscription réussie"));
    }

    
    
}
