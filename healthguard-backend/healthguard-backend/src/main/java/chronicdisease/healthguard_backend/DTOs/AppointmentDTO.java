package chronicdisease.healthguard_backend.DTOs;

import java.time.LocalDateTime;

public class AppointmentDTO {
    private LocalDateTime appointmentDate;
    private String doctorName;
    private String location;
    private String reason;
	public LocalDateTime getAppointmentDate() {
		return appointmentDate;
	}
	public void setAppointmentDate(LocalDateTime appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}

    // Constructeurs, getters, setters
    
}
