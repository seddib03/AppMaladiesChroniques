package chronicdisease.healthguard_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.Medication;

public interface MedicationRepository extends JpaRepository<Medication, Long> {

	Medication save(Medication medication);

	List<Medication> findByUserId(Long userId);

}
