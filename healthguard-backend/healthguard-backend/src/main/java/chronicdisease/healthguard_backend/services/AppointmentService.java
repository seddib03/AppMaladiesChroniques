package chronicdisease.healthguard_backend.services;

import java.util.List;

import chronicdisease.healthguard_backend.model.Appointment;

public interface AppointmentService {
    Appointment createAppointment(Long userId, Appointment appointment);
    List<Appointment> getAppointmentsByUser(Long userId);
}

