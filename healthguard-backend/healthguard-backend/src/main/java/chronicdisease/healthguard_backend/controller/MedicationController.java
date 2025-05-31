package chronicdisease.healthguard_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import chronicdisease.healthguard_backend.model.Medication;
import chronicdisease.healthguard_backend.services.MedicationService;

@RestController
@RequestMapping("/api/medications")
@CrossOrigin
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @PostMapping("/{userId}")
    public ResponseEntity<Medication> addMedication(@PathVariable Long userId, @RequestBody Medication medication) {
        return ResponseEntity.ok(medicationService.addMedication(userId, medication));
    }

    @GetMapping("/{userId}")
    public List<Medication> getUserMedications(@PathVariable Long userId) {
        return medicationService.getMedicationsByUser(userId);
    }
}

