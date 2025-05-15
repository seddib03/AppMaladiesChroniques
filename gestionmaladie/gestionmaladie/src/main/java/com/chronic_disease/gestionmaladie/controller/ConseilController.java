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

import com.chronic_disease.gestionmaladie.model.Conseil;
import com.chronic_disease.gestionmaladie.service.ConseilService;

@RestController
@RequestMapping("/api/conseils")
public class ConseilController {
	private final ConseilService conseilService;

    public ConseilController(ConseilService conseilService) {
        this.conseilService = conseilService;
    }

    @GetMapping
    public List<Conseil> getAll() {
        return conseilService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Conseil> getById(@PathVariable Long id) {
        return conseilService.getById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Conseil create(@RequestBody Conseil conseil) {
        return conseilService.save(conseil);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        conseilService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
