package com.chronic_disease.gestionmaladie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chronic_disease.gestionmaladie.model.Symptome;

public interface SymptomeRepository extends JpaRepository<Symptome, Long> {

}
