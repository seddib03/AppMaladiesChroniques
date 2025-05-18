package com.chronic_disease.gestionmaladie.model;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity

public class Medicament {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_medicament;

    @ManyToOne
    @JoinColumn(name = "id_utilisateur", nullable = false)
    private Utilisateur utilisateur;

    @Column(length = 100)
    private String nom_medicament;

    @Column(length = 50)
    private String dosage;

    @Column(length = 100)
    private String frequence;

    @ElementCollection
    private List<LocalTime> heure_prise;

    private LocalDate date_debut;

    private LocalDate date_fin;

    private boolean a_renouveler;

	public Long getId_medicament() {
		return id_medicament;
	}

	public void setId_medicament(Long id_medicament) {
		this.id_medicament = id_medicament;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public String getNom_medicament() {
		return nom_medicament;
	}

	public void setNom_medicament(String nom_medicament) {
		this.nom_medicament = nom_medicament;
	}

	public String getDosage() {
		return dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public String getFrequence() {
		return frequence;
	}

	public void setFrequence(String frequence) {
		this.frequence = frequence;
	}

	public List<LocalTime> getHeure_prise() {
		return heure_prise;
	}

	public void setHeure_prise(List<LocalTime> heure_prise) {
		this.heure_prise = heure_prise;
	}

	public LocalDate getDate_debut() {
		return date_debut;
	}

	public void setDate_debut(LocalDate date_debut) {
		this.date_debut = date_debut;
	}

	public LocalDate getDate_fin() {
		return date_fin;
	}

	public void setDate_fin(LocalDate date_fin) {
		this.date_fin = date_fin;
	}

	public boolean isA_renouveler() {
		return a_renouveler;
	}

	public void setA_renouveler(boolean a_renouveler) {
		this.a_renouveler = a_renouveler;
	}

    // Getters and Setters
    

}
