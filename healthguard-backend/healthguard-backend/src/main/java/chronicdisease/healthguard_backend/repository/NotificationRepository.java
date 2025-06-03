package chronicdisease.healthguard_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.Notification;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUserId(Long userId);
}
