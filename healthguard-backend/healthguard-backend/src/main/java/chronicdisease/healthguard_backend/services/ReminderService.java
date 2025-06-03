package chronicdisease.healthguard_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.Reminder;
import chronicdisease.healthguard_backend.repository.ReminderRepository;

@Service
public class ReminderService {

    @Autowired
    private ReminderRepository reminderRepository;

    public List<Reminder> getAllReminders() {
        return reminderRepository.findAll();
    }

    public List<Reminder> getRemindersByUser(Long userId) {
        return reminderRepository.findByUserId(userId);
    }

    public Reminder createReminder(Reminder reminder) {
        return reminderRepository.save(reminder);
    }

    public Optional<Reminder> markAsSent(Long id) {
        return reminderRepository.findById(id).map(reminder -> {
            reminder.setSent(true);
            return reminderRepository.save(reminder);
        });
    }

    public void deleteReminder(Long id) {
        reminderRepository.deleteById(id);
    }
}

