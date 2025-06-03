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

import chronicdisease.healthguard_backend.model.HealthDiary;
import chronicdisease.healthguard_backend.services.HealthDiaryService;

@RestController
@RequestMapping("/api/diary")
public class HealthDiaryController {

    @Autowired
    private HealthDiaryService diaryService;

    @PostMapping
    public ResponseEntity<HealthDiary> create(@RequestBody HealthDiary diary) {
        return ResponseEntity.ok(diaryService.createEntry(diary));
    }

    @GetMapping("/{id}")
    public ResponseEntity<HealthDiary> get(@PathVariable Long id) {
        return diaryService.getEntryById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public List<HealthDiary> getByUser(@PathVariable Long userId) {
        return diaryService.getEntriesByUser(userId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HealthDiary> update(@PathVariable Long id, @RequestBody HealthDiary updated) {
        return diaryService.updateEntry(id, updated)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        diaryService.deleteEntry(id);
        return ResponseEntity.noContent().build();
    }
}
