package chronicdisease.healthguard_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.Medication;
import chronicdisease.healthguard_backend.repository.MedicationRepository;

@Service
public class MedicationService {

    @Autowired
    private MedicationRepository medicationRepository;

    public Medication createMedication(Medication medication) {
        return medicationRepository.save(medication);
    }

    public Optional<Medication> getMedicationById(Long id) {
        return medicationRepository.findById(id);
    }

    public List<Medication> getMedicationsByUser(Long userId) {
        return medicationRepository.findByUserId(userId);
    }

    public Optional<Medication> updateMedication(Long id, Medication updated) {
        return medicationRepository.findById(id).map(existing -> {
            existing.setName(updated.getName());
            existing.setDosage(updated.getDosage());
            existing.setFrequency(updated.getFrequency());
            existing.setStartDate(updated.getStartDate());
            existing.setEndDate(updated.getEndDate());
            return medicationRepository.save(existing);
        });
    }

    public void deleteMedication(Long id) {
        medicationRepository.deleteById(id);
    }

	public List<Medication> findMedicationsDueSoon() {
		// TODO Auto-generated method stub
		return null;
	}
}
