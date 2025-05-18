package com.chronic_disease.gestionmaladie.service;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.chronic_disease.gestionmaladie.model.Notification;
import com.chronic_disease.gestionmaladie.repository.NotificationRepository;

@Service
public class NotificationService {
	private final NotificationRepository notificationRepository;

    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public List<Notification> getAllNotifications() {
        return notificationRepository.findAll();
    }

    public Optional<Notification> getNotificationById(Long id) {
        return notificationRepository.findById(id);
    }

    public Notification saveNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    public void deleteNotification(Long id) {
        notificationRepository.deleteById(id);
    }

}
