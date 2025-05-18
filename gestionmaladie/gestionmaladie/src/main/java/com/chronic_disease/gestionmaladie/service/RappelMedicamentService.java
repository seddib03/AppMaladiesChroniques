package com.chronic_disease.gestionmaladie.service;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.chronic_disease.gestionmaladie.model.RappelMedicament;
import com.chronic_disease.gestionmaladie.repository.RappelMedicamentRepository;

@Service
public class RappelMedicamentService {
	private final RappelMedicamentRepository rappelMedicamentRepository;

    public RappelMedicamentService(RappelMedicamentRepository rappelMedicamentRepository) {
        this.rappelMedicamentRepository = rappelMedicamentRepository;
    }

    public List<RappelMedicament> getAllRappels() {
        return rappelMedicamentRepository.findAll();
    }

    public Optional<RappelMedicament> getRappelById(Long id) {
        return rappelMedicamentRepository.findById(id);
    }

    public RappelMedicament saveRappel(RappelMedicament rappelMedicament) {
        return rappelMedicamentRepository.save(rappelMedicament);
    }

    public void deleteRappel(Long id) {
        rappelMedicamentRepository.deleteById(id);
    }

}
