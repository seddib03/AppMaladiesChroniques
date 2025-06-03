package chronicdisease.healthguard_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.Appointment;
import chronicdisease.healthguard_backend.repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepository.findById(id);
    }

    public List<Appointment> getAppointmentsByUser(Long userId) {
        return appointmentRepository.findByUserId(userId);
    }

    public Optional<Appointment> updateAppointment(Long id, Appointment updated) {
        return appointmentRepository.findById(id).map(existing -> {
            existing.setDate(updated.getDate());
            existing.setDoctorName(updated.getDoctorName());
            existing.setReason(updated.getReason());
            return appointmentRepository.save(existing);
        });
    }

    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }
}
