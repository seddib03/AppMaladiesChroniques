package com.chronic_disease.gestionmaladie.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.chronic_disease.gestionmaladie.model.StatistiqueSymptome;
import com.chronic_disease.gestionmaladie.repository.StatistiqueSymptomeRepository;

@Service
public class StatistiqueSymptomeService {
	private final StatistiqueSymptomeRepository repo;

    public StatistiqueSymptomeService(StatistiqueSymptomeRepository repo) {
        this.repo = repo;
    }

    public List<StatistiqueSymptome> getAll() {
        return repo.findAll();
    }

    public Optional<StatistiqueSymptome> getById(Long id) {
        return repo.findById(id);
    }

    public StatistiqueSymptome save(StatistiqueSymptome s) {
        return repo.save(s);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

}
