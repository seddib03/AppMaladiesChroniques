package com.example.loginapp.models;

public class Utilisateur {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String password;
    private String sexe;

    // Getters et Setters
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    // Ajoute les autres getters/setters ici selon besoin
}

