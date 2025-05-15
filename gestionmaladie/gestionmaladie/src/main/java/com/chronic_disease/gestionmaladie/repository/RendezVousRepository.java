package com.chronic_disease.gestionmaladie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chronic_disease.gestionmaladie.model.RendezVous;

public interface RendezVousRepository extends JpaRepository<RendezVous, Long> {

	List<RendezVous> findAll();

}
