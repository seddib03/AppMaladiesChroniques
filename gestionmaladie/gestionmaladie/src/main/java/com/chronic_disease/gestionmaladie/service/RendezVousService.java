package com.chronic_disease.gestionmaladie.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.chronic_disease.gestionmaladie.model.RendezVous;
import com.chronic_disease.gestionmaladie.repository.RendezVousRepository;

@Service
public class RendezVousService {
	private final RendezVousRepository repository;

    public RendezVousService(RendezVousRepository repository) {
        this.repository = repository;
    }

    public List<RendezVous> getAll() {
        return repository.findAll();
    }

    public Optional<RendezVous> getById(Long id) {
        return repository.findById(id);
    }

    public RendezVous save(RendezVous r) {
        return repository.save(r);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

}
