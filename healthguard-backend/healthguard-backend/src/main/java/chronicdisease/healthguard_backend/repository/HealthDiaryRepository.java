package chronicdisease.healthguard_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.HealthDiary;

import java.util.List;

public interface HealthDiaryRepository extends JpaRepository<HealthDiary, Long> {
    List<HealthDiary> findByUserId(Long userId);
}
