package chronicdisease.healthguard_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.Medication;
import chronicdisease.healthguard_backend.model.User;
import chronicdisease.healthguard_backend.repository.MedicationRepository;
import chronicdisease.healthguard_backend.repository.UserRepository;

@Service
public class MedicationServiceImpl implements MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Medication addMedication(Long userId, Medication medication) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));
        medication.setUser(user);
        return medicationRepository.save(medication);
    }

    @Override
    public List<Medication> getMedicationsByUser(Long userId) {
        return medicationRepository.findByUserId(userId);
    }
}
