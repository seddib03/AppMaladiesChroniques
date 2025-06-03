package chronicdisease.healthguard_backend.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
public class HealthDiary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate date;

    private int painLevel;       // 0 à 10
    private int fatigueLevel;    // 0 à 10
    private int asthmaCrisis;    // Nombre de crises (si asthme)

    @Column(length = 1000)
    private String symptomsDescription;

    @ManyToOne
    private User user;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public int getPainLevel() {
		return painLevel;
	}

	public void setPainLevel(int painLevel) {
		this.painLevel = painLevel;
	}

	public int getFatigueLevel() {
		return fatigueLevel;
	}

	public void setFatigueLevel(int fatigueLevel) {
		this.fatigueLevel = fatigueLevel;
	}

	public int getAsthmaCrisis() {
		return asthmaCrisis;
	}

	public void setAsthmaCrisis(int asthmaCrisis) {
		this.asthmaCrisis = asthmaCrisis;
	}

	public String getSymptomsDescription() {
		return symptomsDescription;
	}

	public void setSymptomsDescription(String symptomsDescription) {
		this.symptomsDescription = symptomsDescription;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

    // getters and setters
    
}

