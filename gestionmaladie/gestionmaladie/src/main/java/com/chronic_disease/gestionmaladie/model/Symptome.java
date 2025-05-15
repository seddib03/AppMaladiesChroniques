package com.chronic_disease.gestionmaladie.model;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Symptome {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_symptome;

    @ManyToOne
    @JoinColumn(name = "id_utilisateur", nullable = false)
    private Utilisateur utilisateur;

    private String type_symptome;

    private String intensite;

    private LocalDateTime date_enregistrement;

    @Column(columnDefinition = "TEXT")
    private String commentaire;

	public Long getId_symptome() {
		return id_symptome;
	}

	public void setId_symptome(Long id_symptome) {
		this.id_symptome = id_symptome;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public String getType_symptome() {
		return type_symptome;
	}

	public void setType_symptome(String type_symptome) {
		this.type_symptome = type_symptome;
	}

	public String getIntensite() {
		return intensite;
	}

	public void setIntensite(String intensite) {
		this.intensite = intensite;
	}

	public LocalDateTime getDate_enregistrement() {
		return date_enregistrement;
	}

	public void setDate_enregistrement(LocalDateTime date_enregistrement) {
		this.date_enregistrement = date_enregistrement;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

    // Getters and Setters
    

}
