package com.chronic_disease.gestionmaladie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chronic_disease.gestionmaladie.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {

	List<Notification> findAll();

}
