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
public class Appointment {
  @Id @GeneratedValue
  private Long id;
  private LocalDate date;
  private String doctorName;
  private boolean isOnline;
  private String link; // si rdv en ligne

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

public String getDoctorName() {
	return doctorName;
}

public void setDoctorName(String doctorName) {
	this.doctorName = doctorName;
}


public boolean isOnline() {
	return isOnline;
}

public void setOnline(boolean isOnline) {
	this.isOnline = isOnline;
}

public String getLink() {
	return link;
}

public void setLink(String link) {
	this.link = link;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}
  
  
}
