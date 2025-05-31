package chronicdisease.healthguard_backend.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
  @Id @GeneratedValue
  private Long id;
  
  private String name;
  private String email;
  private String password;
  private String role; // USER, ADMIN, DOCTOR, etc.
  private String chronicCondition; // diabète, hypertension, etc.
  
  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private List<HealthDiary> diaries;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private List<Appointment> appointments;
public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}
public String getChronicCondition() {
	return chronicCondition;
}
public void setChronicCondition(String chronicCondition) {
	this.chronicCondition = chronicCondition;
}
public List<HealthDiary> getDiaries() {
	return diaries;
}
public void setDiaries(List<HealthDiary> diaries) {
	this.diaries = diaries;
}
public List<Appointment> getAppointments() {
	return appointments;
}
public void setAppointments(List<Appointment> appointments) {
	this.appointments = appointments;
}

  
  
}
