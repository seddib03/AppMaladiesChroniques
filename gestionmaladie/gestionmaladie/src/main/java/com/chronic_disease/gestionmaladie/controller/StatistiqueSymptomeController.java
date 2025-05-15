package com.chronic_disease.gestionmaladie.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chronic_disease.gestionmaladie.model.StatistiqueSymptome;
import com.chronic_disease.gestionmaladie.service.StatistiqueSymptomeService;

@RestController
@RequestMapping("/api/statistiques")
public class StatistiqueSymptomeController {
	private final StatistiqueSymptomeService service;

    public StatistiqueSymptomeController(StatistiqueSymptomeService service) {
        this.service = service;
    }

    @GetMapping
    public List<StatistiqueSymptome> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<StatistiqueSymptome> getById(@PathVariable Long id) {
        return service.getById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public StatistiqueSymptome create(@RequestBody StatistiqueSymptome s) {
        return service.save(s);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
