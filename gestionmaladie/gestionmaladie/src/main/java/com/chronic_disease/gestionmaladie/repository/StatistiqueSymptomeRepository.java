package com.chronic_disease.gestionmaladie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chronic_disease.gestionmaladie.model.StatistiqueSymptome;

public interface StatistiqueSymptomeRepository extends JpaRepository<StatistiqueSymptome, Long> {

	void deleteById(Long id);

	List<StatistiqueSymptome> findAll();

}
