package chronicdisease.healthguard_backend.services;

import chronicdisease.healthguard_backend.model.Notification;
import chronicdisease.healthguard_backend.repository.NotificationRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/test")
@RequiredArgsConstructor
public class TestController {
    private final NotificationScheduler scheduler;
    private final NotificationRepository notificationRepository; // Ajout

    @PostMapping("/generate-notifications")
    public ResponseEntity<String> generateTestNotifications() {
        scheduler.checkMedicationReminders();
        scheduler.checkAppointmentReminders();

        // Debug: Affiche les notifications générées
        List<Notification> notifications = notificationRepository.findAll();
        System.out.println("Notifications générées: " + notifications.size());
        notifications.forEach(n -> System.out.println(
                "ID: " + n.getId() +
                        " | Message: " + n.getMessage() +
                        " | User: " + (n.getUser() != null ? n.getUser().getId() : "null") +
                        " | Read: " + n.getRead()
        ));

        return ResponseEntity.ok(notifications.size() + " notifications générées");
    }
    @GetMapping("/get-notifications")
    public ResponseEntity<List<Notification>> getTestNotifications() {
        List<Notification> notifications = notificationRepository.findByUser_IdAndReadFalse(1L); // Test avec user ID 1
        return ResponseEntity.ok(notifications);
    }
}