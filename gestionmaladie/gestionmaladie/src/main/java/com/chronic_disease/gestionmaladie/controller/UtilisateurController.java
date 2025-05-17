package com.chronic_disease.gestionmaladie.controller;
import org.springframework.web.bind.annotation.*;


import com.chronic_disease.gestionmaladie.model.Utilisateur;
import com.chronic_disease.gestionmaladie.service.UtilisateurService;

import java.util.List;

@RestController
@RequestMapping("/api/utilisateurs")
@CrossOrigin("*")
public class UtilisateurController {
	private final UtilisateurService service;

    public UtilisateurController(UtilisateurService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public Utilisateur register(@RequestBody Utilisateur u) {
        return service.register(u);
    }

    @GetMapping
    public List<Utilisateur> all() {
        return service.findAll();
    }

}
