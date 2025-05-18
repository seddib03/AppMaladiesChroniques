package com.chronic_disease.gestionmaladie.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "id_utilisateur", nullable = false)
    private Utilisateur utilisateur;

    private String type_notification;

    @Column(columnDefinition = "TEXT")
    private String contenu;

    private LocalDateTime date_heure_envoi;

    private Boolean lu;

	public Long getId_notification() {
		return id;
	}

	public void setId_notification(Long id_notification) {
		this.id = id_notification;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public String getType_notification() {
		return type_notification;
	}

	public void setType_notification(String type_notification) {
		this.type_notification = type_notification;
	}

	public String getContenu() {
		return contenu;
	}

	public void setContenu(String contenu) {
		this.contenu = contenu;
	}

	public LocalDateTime getDate_heure_envoi() {
		return date_heure_envoi;
	}

	public void setDate_heure_envoi(LocalDateTime date_heure_envoi) {
		this.date_heure_envoi = date_heure_envoi;
	}

	public Boolean getLu() {
		return lu;
	}

	public void setLu(Boolean lu) {
		this.lu = lu;
	}

    // Getters and Setters
    

}
