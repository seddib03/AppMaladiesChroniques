package com.chronic_disease.gestionmaladie.model;
import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
public class StatistiqueSymptome {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_statistique;

    @ManyToOne
    @JoinColumn(name = "id_utilisateur", nullable = false)
    private Utilisateur utilisateur;

    private String type_symptome;

    private String periode;

    private BigDecimal valeur_moyenne;

    private Integer nombre_occurences;

	public Long getId_statistique() {
		return id_statistique;
	}

	public void setId_statistique(Long id_statistique) {
		this.id_statistique = id_statistique;
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

	public String getPeriode() {
		return periode;
	}

	public void setPeriode(String periode) {
		this.periode = periode;
	}

	public BigDecimal getValeur_moyenne() {
		return valeur_moyenne;
	}

	public void setValeur_moyenne(BigDecimal valeur_moyenne) {
		this.valeur_moyenne = valeur_moyenne;
	}

	public Integer getNombre_occurences() {
		return nombre_occurences;
	}

	public void setNombre_occurences(Integer nombre_occurences) {
		this.nombre_occurences = nombre_occurences;
	}

    // Getters and Setters
    
    

}
