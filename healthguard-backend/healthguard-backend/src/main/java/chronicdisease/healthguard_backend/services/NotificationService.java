package chronicdisease.healthguard_backend.services;

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
}
