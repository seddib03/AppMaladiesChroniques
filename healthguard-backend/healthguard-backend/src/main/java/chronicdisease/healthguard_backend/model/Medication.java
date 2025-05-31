package chronicdisease.healthguard_backend.model;


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
public class Medication {
  @Id @GeneratedValue
  private Long id;
  private String name;
  private String dosage;
  private String frequency; // ex : 2 fois/jour
  private int stock;
  @ManyToOne
  private User user;

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

public String getDosage() {
	return dosage;
}

public void setDosage(String dosage) {
	this.dosage = dosage;
}



public String getFrequency() {
	return frequency;
}

public void setFrequency(String frequency) {
	this.frequency = frequency;
}

public int getStock() {
	return stock;
}

public void setStock(int stock) {
	this.stock = stock;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}
  
  
}

