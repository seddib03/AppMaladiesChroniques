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

import com.chronic_disease.gestionmaladie.model.Symptome;
import com.chronic_disease.gestionmaladie.service.SymptomeService;

@RestController
@RequestMapping("/api/symptomes")
public class SymptomeController {
	private final SymptomeService symptomeService;

    public SymptomeController(SymptomeService symptomeService) {
        this.symptomeService = symptomeService;
    }

    @GetMapping
    public List<Symptome> getAllSymptomes() {
        return symptomeService.getAllSymptomes();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Symptome> getSymptomeById(@PathVariable Long id) {
        return symptomeService.getSymptomeById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Symptome createSymptome(@RequestBody Symptome symptome) {
        return symptomeService.saveSymptome(symptome);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSymptome(@PathVariable Long id) {
        symptomeService.deleteSymptome(id);
        return ResponseEntity.noContent().build();
    }

}
