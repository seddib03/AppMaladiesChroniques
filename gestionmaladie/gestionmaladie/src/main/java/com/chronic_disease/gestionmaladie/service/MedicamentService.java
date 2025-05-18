package com.chronic_disease.gestionmaladie.service;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.chronic_disease.gestionmaladie.model.Medicament;
import com.chronic_disease.gestionmaladie.repository.MedicamentRepository;

@Service
public class MedicamentService {
	private final MedicamentRepository medicamentRepository;

    public MedicamentService(MedicamentRepository medicamentRepository) {
        this.medicamentRepository = medicamentRepository;
    }

    public List<Medicament> getAllMedicaments() {
        return medicamentRepository.findAll();
    }

    public Optional<Medicament> getMedicamentById(Long id) {
        return medicamentRepository.findById(id);
    }

    public Medicament saveMedicament(Medicament medicament) {
        return medicamentRepository.save(medicament);
    }

    public void deleteMedicament(Long id) {
        medicamentRepository.deleteById(id);
    }

}
