package chronicdisease.healthguard_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chronicdisease.healthguard_backend.model.HealthDiary;
import chronicdisease.healthguard_backend.services.HealthDiaryService;

@RestController
@RequestMapping("/api/diaries")
@CrossOrigin
public class HealthDiaryController {

    @Autowired
    private HealthDiaryService diaryService;

    @PostMapping("/{userId}")
    public ResponseEntity<HealthDiary> addEntry(@PathVariable Long userId, @RequestBody HealthDiary diary) {
        return ResponseEntity.ok(diaryService.createEntry(userId, diary));
    }

    @GetMapping("/{userId}")
    public List<HealthDiary> getUserDiaries(@PathVariable Long userId) {
        return diaryService.getEntriesByUser(userId);
    }
}
