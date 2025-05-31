package chronicdisease.healthguard_backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

	List<User> findAll();

	User save(User user);

	Optional<User> findById(Long userId);


}
