package chronicdisease.healthguard_backend.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HealthDiary {
  @Id @GeneratedValue
  private Long id;

  private LocalDate date;
  private String symptoms;
  private String notes;
  private String mood;
  private String activity;

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

public String getSymptoms() {
	return symptoms;
}

public void setSymptoms(String symptoms) {
	this.symptoms = symptoms;
}




public String getMood() {
	return mood;
}

public void setMood(String mood) {
	this.mood = mood;
}

public String getActivity() {
	return activity;
}

public void setActivity(String activity) {
	this.activity = activity;
}

public String getNotes() {
	return notes;
}

public void setNotes(String notes) {
	this.notes = notes;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}
  
  
}

