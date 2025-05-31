package chronicdisease.healthguard_backend.DTOs;

import java.time.LocalDate;

public class HealthDiaryDTO {
    private LocalDate date;
    private String symptoms;
    private String notes;
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public String getSymptoms() {
		return symptoms;
	}
	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}

    // Constructeurs, getters, setters
    
}
