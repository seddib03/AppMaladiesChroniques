package com.chronic_disease.gestionmaladie.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.chronic_disease.gestionmaladie.model.Conseil;
import com.chronic_disease.gestionmaladie.repository.ConseilRepository;

@Service
public class ConseilService {
	private final ConseilRepository conseilRepository;

    public ConseilService(ConseilRepository conseilRepository) {
        this.conseilRepository = conseilRepository;
    }

    public List<Conseil> getAll() {
        return conseilRepository.findAll();
    }

    public Optional<Conseil> getById(Long id) {
        return conseilRepository.findById(id);
    }

    public Conseil save(Conseil conseil) {
        return conseilRepository.save(conseil);
    }

    public void delete(Long id) {
        conseilRepository.deleteById(id);
    }

}
