package chronicdisease.healthguard_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.Reminder;

public interface ReminderRepository extends JpaRepository<Reminder, Long> {
    List<Reminder> findByUserId(Long userId);

}
