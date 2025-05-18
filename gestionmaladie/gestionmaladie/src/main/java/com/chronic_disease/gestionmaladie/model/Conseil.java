package com.chronic_disease.gestionmaladie.model;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Conseil {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_conseil;

    @ManyToOne
    @JoinColumn(name = "id_utilisateur", nullable = false)
    private Utilisateur utilisateur;

    private String type_conseil;

    @Lob
    private String contenu;

    private LocalDate date_conseil;

	public Long getId_conseil() {
		return id_conseil;
	}

	public void setId_conseil(Long id_conseil) {
		this.id_conseil = id_conseil;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public String getType_conseil() {
		return type_conseil;
	}

	public void setType_conseil(String type_conseil) {
		this.type_conseil = type_conseil;
	}

	public String getContenu() {
		return contenu;
	}

	public void setContenu(String contenu) {
		this.contenu = contenu;
	}

	public LocalDate getDate_conseil() {
		return date_conseil;
	}

	public void setDate_conseil(LocalDate date_conseil) {
		this.date_conseil = date_conseil;
	}

    // Getters and Setters
    

}
