package chronicdisease.healthguard_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.Appointment;

import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByUserId(Long userId);
    List<Appointment> findByDateBetween(LocalDateTime start, LocalDateTime end);
}
