package chronicdisease.healthguard_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chronicdisease.healthguard_backend.model.Appointment;
import chronicdisease.healthguard_backend.services.AppointmentService;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/{userId}")
    public ResponseEntity<Appointment> createAppointment(@PathVariable Long userId, @RequestBody Appointment appointment) {
        return ResponseEntity.ok(appointmentService.createAppointment(userId, appointment));
    }

    @GetMapping("/{userId}")
    public List<Appointment> getAppointments(@PathVariable Long userId) {
        return appointmentService.getAppointmentsByUser(userId);
    }
}
