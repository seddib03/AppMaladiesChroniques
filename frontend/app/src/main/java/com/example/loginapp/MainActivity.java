package com.example.loginapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.*;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText editTextEmail, editTextPassword;
    Button buttonLogin;
    TextView textViewMessage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        // Liaison avec les éléments XML
        editTextEmail = findViewById(R.id.editTextEmail);
        editTextPassword = findViewById(R.id.editTextPassword);
        buttonLogin = findViewById(R.id.buttonLogin);
        textViewMessage = findViewById(R.id.textViewRegister);

        // Action du bouton Connexion
        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String email = editTextEmail.getText().toString().trim();
                String password = editTextPassword.getText().toString().trim();

                if (email.isEmpty() || password.isEmpty()) {
                    textViewMessage.setText("Veuillez remplir tous les champs");
                } else {
                    // Ici on simule une réponse (tu connecteras ça à l'API plus tard)
                    if (email.equals("test@user.com") && password.equals("123456")) {
                        textViewMessage.setText("Connexion réussie !");
                    } else {
                        textViewMessage.setText("Email ou mot de passe incorrect");
                    }
                }
            }
        });
        TextView textViewRegister = findViewById(R.id.textViewRegister);
        textViewRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, RegisterActivity.class);
                startActivity(intent);
            }
        });


    }

}
