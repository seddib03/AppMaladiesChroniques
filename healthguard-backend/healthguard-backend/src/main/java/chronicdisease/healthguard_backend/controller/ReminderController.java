package chronicdisease.healthguard_backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chronicdisease.healthguard_backend.model.Reminder;
import chronicdisease.healthguard_backend.repository.ReminderRepository;
@RestController
@RequestMapping("/api/reminders")
@CrossOrigin
public class ReminderController {

    @Autowired
    private ReminderRepository reminderRepository;

    @GetMapping
    public List<Reminder> getAllReminders() {
        return reminderRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<Reminder> getRemindersByUser(@PathVariable Long userId) {
        return reminderRepository.findByUserId(userId);
    }

    @PostMapping
    public Reminder createReminder(@RequestBody Reminder reminder) {
        return reminderRepository.save(reminder);
    }

    @PutMapping("/{id}/mark-sent")
    public ResponseEntity<Reminder> markAsSent(@PathVariable Long id) {
        return reminderRepository.findById(id)
            .map(reminder -> {
                reminder.setSent(true);
                return ResponseEntity.ok(reminderRepository.save(reminder));
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deleteReminder(@PathVariable Long id) {
        reminderRepository.deleteById(id);
    }
}
