package chronicdisease.healthguard_backend.DTOs;

import java.time.LocalDateTime;

public class NotificationDTO {
    private String message;
    private boolean read;
    private LocalDateTime timestamp;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean isRead() {
		return read;
	}
	public void setRead(boolean read) {
		this.read = read;
	}
	public LocalDateTime getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

    // Constructeurs, getters, setters
    
}
