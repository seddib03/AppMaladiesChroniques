package chronicdisease.healthguard_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chronicdisease.healthguard_backend.model.Medication;
import chronicdisease.healthguard_backend.services.MedicationService;

@RestController
@RequestMapping("/api/medications")
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @PostMapping
    public ResponseEntity<Medication> create(@RequestBody Medication medication) {
        return ResponseEntity.ok(medicationService.createMedication(medication));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medication> get(@PathVariable Long id) {
        return medicationService.getMedicationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public List<Medication> getByUser(@PathVariable Long userId) {
        return medicationService.getMedicationsByUser(userId);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medication> update(@PathVariable Long id, @RequestBody Medication updated) {
        return medicationService.updateMedication(id, updated)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        medicationService.deleteMedication(id);
        return ResponseEntity.noContent().build();
    }
}
