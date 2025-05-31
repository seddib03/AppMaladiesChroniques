package chronicdisease.healthguard_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

	List<Notification> findByUserId(Long userId);

	Notification save(Notification notification);

}
