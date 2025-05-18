package com.chronic_disease.gestionmaladie.model;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class RendezVous {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_rendezvous;

    @ManyToOne
    @JoinColumn(name = "id_utilisateur", nullable = false)
    private Utilisateur utilisateur;

    private LocalDateTime date_heure;

    private String lieu;

    private String medecin;

    private String type_consultation;

	public Long getId_rendezvous() {
		return id_rendezvous;
	}

	public void setId_rendezvous(Long id_rendezvous) {
		this.id_rendezvous = id_rendezvous;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public LocalDateTime getDate_heure() {
		return date_heure;
	}

	public void setDate_heure(LocalDateTime date_heure) {
		this.date_heure = date_heure;
	}

	public String getLieu() {
		return lieu;
	}

	public void setLieu(String lieu) {
		this.lieu = lieu;
	}

	public String getMedecin() {
		return medecin;
	}

	public void setMedecin(String medecin) {
		this.medecin = medecin;
	}

	public String getType_consultation() {
		return type_consultation;
	}

	public void setType_consultation(String type_consultation) {
		this.type_consultation = type_consultation;
	}

    // Getters and Setters
    

}
