package chronicdisease.healthguard_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import chronicdisease.healthguard_backend.model.EducationalContent;

public interface EducationalContentRepository extends JpaRepository<EducationalContent, Long> {
    List<EducationalContent> findByDiseaseType(String diseaseType);

}
