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

import com.chronic_disease.gestionmaladie.model.RappelMedicament;
import com.chronic_disease.gestionmaladie.service.RappelMedicamentService;

@RestController
@RequestMapping("/api/rappels")
public class RappelMedicamentController {
	private final RappelMedicamentService rappelMedicamentService;

    public RappelMedicamentController(RappelMedicamentService rappelMedicamentService) {
        this.rappelMedicamentService = rappelMedicamentService;
    }

    @GetMapping
    public List<RappelMedicament> getAllRappels() {
        return rappelMedicamentService.getAllRappels();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RappelMedicament> getRappelById(@PathVariable Long id) {
        return rappelMedicamentService.getRappelById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public RappelMedicament createRappel(@RequestBody RappelMedicament rappelMedicament) {
        return rappelMedicamentService.saveRappel(rappelMedicament);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRappel(@PathVariable Long id) {
        rappelMedicamentService.deleteRappel(id);
        return ResponseEntity.noContent().build();
    }

}
