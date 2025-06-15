package chronicdisease.healthguard_backend.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.Notification;
import chronicdisease.healthguard_backend.repository.NotificationRepository;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public Notification createNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    public Optional<Notification> getNotificationById(Long id) {
        return notificationRepository.findById(id);
    }

    public List<Notification> getNotificationsByUser(Long userId) {
        return notificationRepository.findByUserId(userId);
    }

    public Optional<Notification> markAsRead(Long id) {
        return notificationRepository.findById(id).map(notification -> {
            notification.setRead(true);
            return notificationRepository.save(notification);
        });
    }

    public void deleteNotification(Long id) {
        notificationRepository.deleteById(id);
    }

    // NotificationService.java
    public long countUnreadByUser(Long userId) {
        return notificationRepository.countByUserIdAndReadFalse(userId);
    }

    public List<Notification> findByUserIdAndTypeAndDateAfter(Long userId, String type, LocalDateTime date) {
        return notificationRepository.findByUserIdAndTypeAndDateAfter(userId, type, date);
    }
    public List<Notification> getUnreadNotifications(Long userId) {
        return notificationRepository.findByUserIdAndReadFalse(userId); // <-- Ici
    }


}
