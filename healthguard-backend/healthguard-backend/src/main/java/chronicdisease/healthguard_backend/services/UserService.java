package chronicdisease.healthguard_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.User;
import chronicdisease.healthguard_backend.repository.UserRepository;
import jakarta.annotation.PostConstruct;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostConstruct
    public void init() {
        encodeAllPasswords();
    }


    public User createUser(User user) {
    	String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }
    public void encodeAllPasswords() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            String rawPassword = user.getPassword();
            if (!rawPassword.startsWith("$2a$")) {  // vérifie si déjà encodé
                user.setPassword(passwordEncoder.encode(rawPassword));
                userRepository.save(user);
            }
        }
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> updateUser(Long id, User updatedUser) {
        return userRepository.findById(id).map(existing -> {
            existing.setUsername(updatedUser.getUsername());
            existing.setPassword(updatedUser.getPassword());
            existing.setAge(updatedUser.getAge());
            existing.setGender(updatedUser.getGender());
            existing.setDiseaseType(updatedUser.getDiseaseType());
            existing.setMedicalHistory(updatedUser.getMedicalHistory());
            return userRepository.save(existing);
        });
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

	public User findByUsername(String username) {
	    return userRepository.findByUsername(username).orElse(null);
	}

}
