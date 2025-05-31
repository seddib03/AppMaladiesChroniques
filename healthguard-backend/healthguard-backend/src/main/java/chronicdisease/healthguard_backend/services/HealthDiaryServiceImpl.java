package chronicdisease.healthguard_backend.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import chronicdisease.healthguard_backend.model.HealthDiary;
import chronicdisease.healthguard_backend.model.User;
import chronicdisease.healthguard_backend.repository.HealthDiaryRepository;
import chronicdisease.healthguard_backend.repository.UserRepository;

@Service
public class HealthDiaryServiceImpl implements HealthDiaryService {

    @Autowired
    private HealthDiaryRepository diaryRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public HealthDiary createEntry(Long userId, HealthDiary diary) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur introuvable"));
        diary.setUser(user);
        diary.setDate(LocalDate.now());
        return diaryRepository.save(diary);
    }

    @Override
    public List<HealthDiary> getEntriesByUser(Long userId) {
        return diaryRepository.findByUserId(userId);
    }
}

