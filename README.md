# 🏥 Chronic Health

> Application web intelligente pour la gestion des maladies chroniques

##  À Propos

Chronic Health est une plateforme web complète permettant aux patients atteints de maladies chroniques (diabète, hypertension, asthme...) de suivre leur santé au quotidien, gérer leurs traitements et recevoir des conseils personnalisés.

**Projet académique réalisé à l'INSEA** - Filière Data & Software Engineering (2024/2025)

###  Fonctionnalités Clés

-  **Gestion des médicaments** - Rappels automatiques et suivi d'observance
-  **Suivi des symptômes** - Journalisation quotidienne avec graphiques d'évolution
-  **Rendez-vous médicaux** - Planification et notifications
-  **Conseils personnalisés** - Recommandations alimentaires et sportives adaptées
-  **Système de notifications** - Alertes intelligentes pour médicaments et symptômes critiques
-  **Sécurité avancée** - Authentification JWT et chiffrement des données

##  Démarrage Rapide

### Prérequis

```bash
Java 17+, Node.js 18+, PostgreSQL 15+, Maven 3.8+
```

### Installation

**1. Cloner le repo**
```bash
git clone https://github.com/seddib03/AppMaladiesChroniques.git
cd chronic-health
```

**2. Base de données**
```sql
CREATE DATABASE chronic_health_db;
```

**3. Backend**
```bash
cd backend
# Configurer src/main/resources/application.properties
mvn clean install
mvn spring-boot:run
# → http://localhost:8080
```

**4. Frontend**
```bash
cd frontend
npm install
npm start
# → http://localhost:3000
```

##  Architecture

```
Frontend (React) ←→ API REST (Spring Boot) ←→ PostgreSQL
     ↓
  JWT Auth + HTTPS
```

**Stack Technique:**
- **Frontend:** React.js, HTML5/CSS3, Chart.js
- **Backend:** Java 17, Spring Boot (Security, Data JPA, Web)
- **Database:** PostgreSQL
- **API:** RESTful avec JWT authentication


## 📚 Documentation

### API Endpoints

```bash
# Authentification
POST   /api/auth/register
POST   /api/auth/login

# Médicaments
GET    /api/medicaments
POST   /api/medicaments
PUT    /api/medicaments/{id}
DELETE /api/medicaments/{id}

# Symptômes
GET    /api/symptomes
POST   /api/symptomes
GET    /api/symptomes/stats

# Notifications
GET    /api/notifications
PUT    /api/notifications/{id}/read
```

 [Documentation complète de l'API](http://localhost:8080/swagger-ui.html)

##  Tests

```bash
# Backend (JUnit + Spring Test)
cd backend && mvn test

# Frontend (Jest + React Testing Library)
cd frontend && npm test
```


## 👥 Contributeurs

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/seddib03">
        <img src="https://github.com/seddib03.png" width="100px;" alt="Salma"/><br />
        <sub><b>EDDIB Salma</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/username2">
        <img src="https://github.com/username2.png" width="100px;" alt="Amal"/><br />
        <sub><b>EL BAHARI Amal</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/username3">
        <img src="https://github.com/username3.png" width="100px;" alt="Safaa"/><br />
        <sub><b>LAKTAM Safaa</b></sub>
      </a>
    </td>
  </tr>
</table>

**Encadrement:** Mme ELBAJTA Manal  
**Institution:** [INSEA](https://www.insea.ac.ma/) - Institut National de Statistique et d'Économie Appliquée

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE)

##  Remerciements

- Mme ELBAJTA Manal pour son encadrement


