package chronicdisease.healthguard_backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class SymptomAlert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String alertMessage;

    private LocalDateTime date;

    private boolean resolved = false;

    @ManyToOne
    private User user;

    @ManyToOne
    private HealthDiary healthDiary; // lien vers le journal qui a généré l’alerte

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAlertMessage() {
		return alertMessage;
	}

	public void setAlertMessage(String alertMessage) {
		this.alertMessage = alertMessage;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public boolean isResolved() {
		return resolved;
	}

	public void setResolved(boolean resolved) {
		this.resolved = resolved;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public HealthDiary getHealthDiary() {
		return healthDiary;
	}

	public void setHealthDiary(HealthDiary healthDiary) {
		this.healthDiary = healthDiary;
	}

    // getters and setters
    
}

