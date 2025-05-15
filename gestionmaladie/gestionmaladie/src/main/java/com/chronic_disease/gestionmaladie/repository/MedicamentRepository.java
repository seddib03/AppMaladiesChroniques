package com.chronic_disease.gestionmaladie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chronic_disease.gestionmaladie.model.Medicament;

public interface MedicamentRepository extends JpaRepository<Medicament, Long> {

}
