package chronicdisease.healthguard_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chronicdisease.healthguard_backend.model.EducationalContent;
import chronicdisease.healthguard_backend.repository.EducationalContentRepository;

@RestController
@RequestMapping("/api/educational-content")
@CrossOrigin
public class EducationalContentController {

    @Autowired
    private EducationalContentRepository contentRepository;

    @GetMapping
    public List<EducationalContent> getAllContent() {
        return contentRepository.findAll();
    }

    @GetMapping("/disease/{type}")
    public List<EducationalContent> getByDiseaseType(@PathVariable String type) {
        return contentRepository.findByDiseaseType(type);
    }

    @PostMapping
    public EducationalContent createContent(@RequestBody EducationalContent content) {
        return contentRepository.save(content);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EducationalContent> updateContent(@PathVariable Long id, @RequestBody EducationalContent content) {
        return contentRepository.findById(id)
            .map(existing -> {
                existing.setTitle(content.getTitle());
                existing.setCategory(content.getCategory());
                existing.setContent(content.getContent());
                existing.setDiseaseType(content.getDiseaseType());
                return ResponseEntity.ok(contentRepository.save(existing));
            })
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deleteContent(@PathVariable Long id) {
        contentRepository.deleteById(id);
    }
}
