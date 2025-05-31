package chronicdisease.healthguard_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.HealthDiary;

public interface HealthDiaryRepository extends JpaRepository<HealthDiary, Long> {

	List<HealthDiary> findByUserId(Long userId);

	HealthDiary save(HealthDiary diary);

}
