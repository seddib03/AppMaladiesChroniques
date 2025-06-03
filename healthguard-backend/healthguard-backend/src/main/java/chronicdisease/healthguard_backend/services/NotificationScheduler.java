package chronicdisease.healthguard_backend.services;

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
    private final MedicationService medicationService = new MedicationService();
    private final AppointmentService appointmentService = new AppointmentService();
    private final NotificationService notificationService = new NotificationService();

    @Scheduled(cron = "0 * * * * *") // Toutes les minutes (ajustez selon les besoins)
    public void checkMedicationTimes() {
        List<Medication> upcomingMeds = medicationService.findMedicationsDueSoon();
        upcomingMeds.forEach(med -> {
            Notification notif = new Notification();
            notif.setMessage("Il est temps de prendre votre médicament: " + med.getName());
            notif.setType("medication_reminder");
            notif.setUser(med.getUser());
            notificationService.createNotification(notif);
        });
    }

    @Scheduled(cron = "0 0 * * * *") // Toutes les heures
    public void checkAppointments() {
        List<Appointment> upcomingApps = appointmentService.findAppointmentsDueSoon();
        upcomingApps.forEach(app -> {
            Notification notif = new Notification();
            notif.setMessage("Rappel: Vous avez un rendez-vous demain à " + app.getDate());
            notif.setType("appointment_reminder");
            notif.setUser(app.getUser());
            notificationService.createNotification(notif);
        });
    }
}
