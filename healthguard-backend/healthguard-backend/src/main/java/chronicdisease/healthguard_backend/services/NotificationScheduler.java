package chronicdisease.healthguard_backend.services;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.Appointment;
import chronicdisease.healthguard_backend.model.Medication;
import chronicdisease.healthguard_backend.model.Notification;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class NotificationScheduler {
    private final MedicationService medicationService;
    private final AppointmentService appointmentService;
    private final NotificationService notificationService;

    // Toutes les heures
    @Scheduled(cron = "0 0 * * * *")
    public void checkMedicationReminders() {
        List<Medication> medications = medicationService.findMedicationsToTakeSoon();

        medications.forEach(med -> {
            if (shouldNotify(med)) {
                createMedicationNotification(med);
            }
        });
    }

    // Tous les jours à 8h du matin
    @Scheduled(cron = "0 0 8 * * *")
    public void checkAppointmentReminders() {
        List<Appointment> appointments = appointmentService.findAppointmentsToday();

        appointments.forEach(app -> {
            if (shouldNotify(app)) {
                createAppointmentNotification(app);
            }
        });
    }

    private boolean shouldNotify(Medication medication) {
        return notificationService
                .findByUserIdAndTypeAndDateAfter(
                        medication.getUser().getId(),
                        "MEDICATION_REMINDER",
                        LocalDateTime.now().minusHours(1)
                )
                .isEmpty();
    }

    private boolean shouldNotify(Appointment appointment) {
        return notificationService
                .findByUserIdAndTypeAndDateAfter(
                        appointment.getUser().getId(),
                        "APPOINTMENT_REMINDER",
                        LocalDateTime.now().minusHours(12)
                )
                .isEmpty();
    }

    private void createMedicationNotification(Medication med) {
        Notification notification = new Notification();
        notification.setMessage(String.format(
                "Il est temps de prendre votre %s - %s",
                med.getName(),
                med.getDosage()
        ));
        notification.setType("MEDICATION_REMINDER");
        notification.setDate(LocalDateTime.now());
        notification.setUser(med.getUser());
        notification.setRead(false);

        notificationService.createNotification(notification);
    }

    private void createAppointmentNotification(Appointment app) {
        Notification notification = new Notification();
        notification.setMessage(String.format(
                "Rendez-vous avec %s à %s",
                app.getDoctorName(),
                app.getDate().format(DateTimeFormatter.ofPattern("HH:mm"))
        ));
        notification.setType("APPOINTMENT_REMINDER");
        notification.setDate(LocalDateTime.now());
        notification.setUser(app.getUser());
        notification.setRead(false);


        notificationService.createNotification(notification);
    }
}