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

import com.chronic_disease.gestionmaladie.model.RendezVous;
import com.chronic_disease.gestionmaladie.service.RendezVousService;

@RestController
@RequestMapping("/api/rendezvous")
public class RendezVousController {
	private final RendezVousService service;

    public RendezVousController(RendezVousService service) {
        this.service = service;
    }

    @GetMapping
    public List<RendezVous> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RendezVous> getById(@PathVariable Long id) {
        return service.getById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public RendezVous create(@RequestBody RendezVous r) {
        return service.save(r);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
