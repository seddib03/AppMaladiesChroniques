package com.chronic_disease.gestionmaladie.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.chronic_disease.gestionmaladie.model.Symptome;
import com.chronic_disease.gestionmaladie.repository.SymptomeRepository;

@Service
public class SymptomeService {
	private final SymptomeRepository symptomeRepository;

    public SymptomeService(SymptomeRepository symptomeRepository) {
        this.symptomeRepository = symptomeRepository;
    }

    public List<Symptome> getAllSymptomes() {
        return symptomeRepository.findAll();
    }

    public Optional<Symptome> getSymptomeById(Long id) {
        return symptomeRepository.findById(id);
    }

    public Symptome saveSymptome(Symptome symptome) {
        return symptomeRepository.save(symptome);
    }

    public void deleteSymptome(Long id) {
        symptomeRepository.deleteById(id);
    }

}
