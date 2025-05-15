package com.chronic_disease.gestionmaladie.model;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class RappelMedicament {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_rappel;

    @ManyToOne
    @JoinColumn(name = "id_medicament", nullable = false)
    private Medicament medicament;

    private LocalDateTime date_heure_rappel;

    private boolean pris;

	public Long getId_rappel() {
		return id_rappel;
	}

	public void setId_rappel(Long id_rappel) {
		this.id_rappel = id_rappel;
	}

	public Medicament getMedicament() {
		return medicament;
	}

	public void setMedicament(Medicament medicament) {
		this.medicament = medicament;
	}

	public LocalDateTime getDate_heure_rappel() {
		return date_heure_rappel;
	}

	public void setDate_heure_rappel(LocalDateTime date_heure_rappel) {
		this.date_heure_rappel = date_heure_rappel;
	}

	public boolean isPris() {
		return pris;
	}

	public void setPris(boolean pris) {
		this.pris = pris;
	}

    // Getters and Setters
    

}
