package chronicdisease.healthguard_backend.services;

import chronicdisease.healthguard_backend.model.Notification;

import java.util.List;

public interface NotificationService {
    Notification createNotification(Long userId, Notification notification);
    List<Notification> getNotificationsByUser(Long userId);
}
