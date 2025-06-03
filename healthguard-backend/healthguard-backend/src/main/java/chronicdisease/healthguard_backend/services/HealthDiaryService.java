package chronicdisease.healthguard_backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.HealthDiary;
import chronicdisease.healthguard_backend.model.User;
import chronicdisease.healthguard_backend.repository.HealthDiaryRepository;
import chronicdisease.healthguard_backend.repository.UserRepository;

@Service
public class HealthDiaryService {
	@Autowired
    private UserRepository userRepository;

    @Autowired
    private HealthDiaryRepository diaryRepository;

    public HealthDiary createEntry(HealthDiary diary) {
    	Long userId = diary.getUser().getId();
        User user = userRepository.findById(userId)
                     .orElseThrow(() -> new RuntimeException("User not found"));
        diary.setUser(user);
        return diaryRepository.save(diary);
    }

    public Optional<HealthDiary> getEntryById(Long id) {
        return diaryRepository.findById(id);
    }

    public List<HealthDiary> getEntriesByUser(Long userId) {
        return diaryRepository.findByUserId(userId);
    }

    public Optional<HealthDiary> updateEntry(Long id, HealthDiary updated) {
        return diaryRepository.findById(id).map(existing -> {
            existing.setDate(updated.getDate());
            existing.setSymptomsDescription(updated.getSymptomsDescription());
            existing.setPainLevel(updated.getPainLevel());
            existing.setFatigueLevel(updated.getFatigueLevel());
            return diaryRepository.save(existing);
        });
    }

    public void deleteEntry(Long id) {
        diaryRepository.deleteById(id);
    }
}

