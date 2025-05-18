package com.chronic_disease.gestionmaladie.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.chronic_disease.gestionmaladie.model.Utilisateur;

import java.util.Optional;
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {
	Optional<Utilisateur> findByEmail(String email);

}
