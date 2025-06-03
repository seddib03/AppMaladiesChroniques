package chronicdisease.healthguard_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.EducationalContent;
import chronicdisease.healthguard_backend.repository.EducationalContentRepository;

@Service
public class EducationalContentService {

    @Autowired
    private EducationalContentRepository contentRepository;

    public List<EducationalContent> getAllContent() {
        return contentRepository.findAll();
    }

    public List<EducationalContent> getByDiseaseType(String diseaseType) {
        return contentRepository.findByDiseaseType(diseaseType);
    }

    public EducationalContent createContent(EducationalContent content) {
        return contentRepository.save(content);
    }

    public Optional<EducationalContent> updateContent(Long id, EducationalContent newContent) {
        return contentRepository.findById(id).map(existing -> {
            existing.setTitle(newContent.getTitle());
            existing.setCategory(newContent.getCategory());
            existing.setContent(newContent.getContent());
            existing.setDiseaseType(newContent.getDiseaseType());
            return contentRepository.save(existing);
        });
    }

    public void deleteContent(Long id) {
        contentRepository.deleteById(id);
    }
}
