package com.example.loginapp.network;


import com.example.loginapp.models.Utilisateur;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface APIService {
    @POST("api/utilisateurs/register")
    Call<Utilisateur> registerUtilisateur(@Body Utilisateur utilisateur);

    @POST("api/utilisateurs/login")
    Call<Utilisateur> loginUtilisateur(@Body Utilisateur utilisateur);

    @GET("api/utilisateurs")
    Call<List<Utilisateur>> getAllUtilisateurs();
}

