package com.chronic_disease.gestionmaladie.service;
import org.springframework.stereotype.Service;

import com.chronic_disease.gestionmaladie.model.Utilisateur;
import com.chronic_disease.gestionmaladie.repository.UtilisateurRepository;

import java.util.List;
@Service
public class UtilisateurService {
	private final UtilisateurRepository repo;

    public UtilisateurService(UtilisateurRepository repo) {
        this.repo = repo;
    }

    public Utilisateur register(Utilisateur u) {
        return repo.save(u);
    }

    public List<Utilisateur> findAll() {
        return repo.findAll();
    }

}
