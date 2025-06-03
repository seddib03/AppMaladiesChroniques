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

import chronicdisease.healthguard_backend.model.SymptomAlert;
import chronicdisease.healthguard_backend.repository.SymptomAlertRepository;
@RestController
@RequestMapping("/api/symptom-alerts")
@CrossOrigin
public class SymptomAlertController {

    @Autowired
    private SymptomAlertRepository alertRepository;

    @GetMapping
    public List<SymptomAlert> getAllAlerts() {
        return alertRepository.findAll();
    }

    @GetMapping("/user/{userId}")
    public List<SymptomAlert> getAlertsByUser(@PathVariable Long userId) {
        return alertRepository.findByUserId(userId);
    }

    @PutMapping("/{id}/resolve")
    public ResponseEntity<SymptomAlert> resolveAlert(@PathVariable Long id) {
        return alertRepository.findById(id)
            .map(alert -> {
                alert.setResolved(true);
                return ResponseEntity.ok(alertRepository.save(alert));
            })
            .orElse(ResponseEntity.notFound().build());
    }
}
