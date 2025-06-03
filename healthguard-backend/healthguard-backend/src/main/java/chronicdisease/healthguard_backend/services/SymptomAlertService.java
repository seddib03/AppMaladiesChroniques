package chronicdisease.healthguard_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.SymptomAlert;
import chronicdisease.healthguard_backend.repository.SymptomAlertRepository;

@Service
public class SymptomAlertService {

    @Autowired
    private SymptomAlertRepository alertRepository;

    public List<SymptomAlert> getAllAlerts() {
        return alertRepository.findAll();
    }

    public List<SymptomAlert> getAlertsByUser(Long userId) {
        return alertRepository.findByUserId(userId);
    }

    public Optional<SymptomAlert> resolveAlert(Long id) {
        return alertRepository.findById(id).map(alert -> {
            alert.setResolved(true);
            return alertRepository.save(alert);
        });
    }

    public SymptomAlert createAlert(SymptomAlert alert) {
        return alertRepository.save(alert);
    }
}
