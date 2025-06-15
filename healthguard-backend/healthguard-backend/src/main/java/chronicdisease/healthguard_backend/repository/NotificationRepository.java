package chronicdisease.healthguard_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.Notification;

import java.time.LocalDateTime;
import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    // Récupère uniquement les notifications NON LUES
    List<Notification> findByUserIdAndReadFalse(Long userId); // <-- Ajoutez cette méthode

    // Méthodes existantes (conservées si nécessaires)
    List<Notification> findByUserId(Long userId);
    List<Notification> findByUser_IdAndReadFalse(Long userId);
    long countByUserIdAndReadFalse(Long userId);
    List<Notification> findByUserIdAndTypeAndDateAfter(Long userId, String type, LocalDateTime date);
}