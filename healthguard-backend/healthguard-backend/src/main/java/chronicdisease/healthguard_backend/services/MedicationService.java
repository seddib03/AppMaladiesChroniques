package chronicdisease.healthguard_backend.services;

import java.util.List;

import chronicdisease.healthguard_backend.model.Medication;

public interface MedicationService {
    Medication addMedication(Long userId, Medication medication);
    List<Medication> getMedicationsByUser(Long userId);
}
