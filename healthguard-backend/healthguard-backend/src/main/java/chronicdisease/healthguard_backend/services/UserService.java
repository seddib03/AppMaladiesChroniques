package chronicdisease.healthguard_backend.services;

import java.util.List;
import java.util.Optional;

import chronicdisease.healthguard_backend.model.User;

public interface UserService {
    User createUser(User user);
    Optional<User> findByEmail(String email);
    
	List<User> getAllUsers();
	User save(User user);
}

