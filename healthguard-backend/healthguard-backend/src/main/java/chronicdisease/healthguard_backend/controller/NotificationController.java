package chronicdisease.healthguard_backend.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chronicdisease.healthguard_backend.DTOs.NotificationDTO;
import chronicdisease.healthguard_backend.mapper.NotificationMapper;
import chronicdisease.healthguard_backend.model.Notification;
import chronicdisease.healthguard_backend.services.NotificationService;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin
public class NotificationController {

	@Autowired
    private NotificationService notificationService;

    @GetMapping("/user/{userId}")
    public List<NotificationDTO> getUserNotifications(@PathVariable Long userId) {
        List<Notification> notifications = notificationService.getNotificationsByUser(userId);
        return notifications.stream()
            .map(NotificationMapper::toDTO)
            .collect(Collectors.toList());
    }

    @PostMapping("/user/{userId}")
    public NotificationDTO createNotification(@PathVariable Long userId, @RequestBody NotificationDTO dto) {
        Notification notification = NotificationMapper.toEntity(dto);
        Notification saved = notificationService.createNotification(userId, notification);
        return NotificationMapper.toDTO(saved);
    }
}
