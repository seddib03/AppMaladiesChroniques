package chronicdisease.healthguard_backend.services;

import java.util.List;

import chronicdisease.healthguard_backend.model.HealthDiary;

public interface HealthDiaryService {
    HealthDiary createEntry(Long userId, HealthDiary diary);
    List<HealthDiary> getEntriesByUser(Long userId);
}
