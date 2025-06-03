package chronicdisease.healthguard_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.Medication;

import java.util.List;

public interface MedicationRepository extends JpaRepository<Medication, Long> {
    List<Medication> findByUserId(Long userId);
}
