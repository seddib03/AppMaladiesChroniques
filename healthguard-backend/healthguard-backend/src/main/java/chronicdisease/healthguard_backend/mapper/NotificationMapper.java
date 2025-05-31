package chronicdisease.healthguard_backend.mapper;

import chronicdisease.healthguard_backend.DTOs.NotificationDTO;
import chronicdisease.healthguard_backend.model.Notification;

public class NotificationMapper {

    public static NotificationDTO toDTO(Notification n) {
        NotificationDTO dto = new NotificationDTO();
        dto.setMessage(n.getMessage());
        dto.setRead(n.isRead());
        dto.setTimestamp(n.getTimestamp());
        return dto;
    }

    public static Notification toEntity(NotificationDTO dto) {
        Notification n = new Notification();
        n.setMessage(dto.getMessage());
        n.setRead(dto.isRead());
        n.setTimestamp(dto.getTimestamp());
        return n;
    }
}