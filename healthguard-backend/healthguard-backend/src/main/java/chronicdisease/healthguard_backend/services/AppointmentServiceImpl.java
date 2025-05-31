package chronicdisease.healthguard_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.Appointment;
import chronicdisease.healthguard_backend.model.User;
import chronicdisease.healthguard_backend.repository.AppointmentRepository;
import chronicdisease.healthguard_backend.repository.UserRepository;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Appointment createAppointment(Long userId, Appointment appointment) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));
        appointment.setUser(user);
        return appointmentRepository.save(appointment);
    }

    @Override
    public List<Appointment> getAppointmentsByUser(Long userId) {
        return appointmentRepository.findByUserId(userId);
    }
}

