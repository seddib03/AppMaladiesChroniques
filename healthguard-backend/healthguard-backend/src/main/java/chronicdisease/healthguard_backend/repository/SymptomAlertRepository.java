package chronicdisease.healthguard_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.SymptomAlert;

public interface SymptomAlertRepository extends JpaRepository<SymptomAlert, Long> {
    List<SymptomAlert> findByUserId(Long userId);

}
