import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaAppleAlt, FaRunning, FaHeartbeat, FaBook, FaVideo } from 'react-icons/fa';
import healthService from '../services/healthService'; // Assurez-vous que le chemin est correct

Chart.register(ArcElement, Tooltip, Legend);

const RecommendationsPage = ({ userId }) => {
  const [educationalContents, setEducationalContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [patientConditions, setPatientConditions] = useState([]);

  // Fonction pour récupérer les contenus éducatifs depuis le backend
  const fetchEducationalContents = async () => {
    try {
      setLoading(true);
      const response = await healthService.getEducationalContents();
      setEducationalContents(response);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fonction pour filtrer par type de maladie
  const fetchContentsByDisease = async (diseaseType) => {
    try {
      setLoading(true);
      const response = await healthService.getEducationalContentByDisease(diseaseType);
      setEducationalContents(response);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Charger les conditions du patient et les contenus correspondants
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Récupérer les conditions du patient
        const conditions = await healthService.getPatientConditions(userId);
        setPatientConditions(conditions);
        
        // Charger les contenus pour la première condition (ou tous si aucune condition)
        if (conditions.length > 0) {
          await fetchContentsByDisease(conditions[0]);
        } else {
          await fetchEducationalContents();
        }
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, [userId]);

  // Préparer les données pour le graphique (basé sur les catégories)
  const prepareChartData = () => {
    const categories = {};
    
    educationalContents.forEach(content => {
      if (categories[content.category]) {
        categories[content.category]++;
      } else {
        categories[content.category] = 1;
      }
    });

    return {
      labels: Object.keys(categories),
      datasets: [
        {
          label: 'Répartition par catégorie',
          data: Object.values(categories),
          backgroundColor: ['#0f766e', '#34d399', '#a3a3a3', '#f59e0b', '#3b82f6'],
          borderWidth: 1,
        },
      ],
    };
  };

  // Obtenir l'icône appropriée selon la catégorie
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Nutrition':
        return <FaAppleAlt color="#0f766e" size={24} />;
      case 'Exercise':
        return <FaRunning color="#0f766e" size={24} />;
      case 'Information':
        return <FaHeartbeat color="#0f766e" size={24} />;
      case 'Article':
        return <FaBook color="#0f766e" size={24} />;
      case 'Video':
        return <FaVideo color="#0f766e" size={24} />;
      default:
        return <FaHeartbeat color="#0f766e" size={24} />;
    }
  };

  return (
    <main className="recommendations-main">
      <h1 className="recommendations-title">Contenus Éducatifs</h1>

      {loading ? (
        <p>Chargement des données...</p>
      ) : error ? (
        <p className="error-message">Erreur: {error}</p>
      ) : (
        <>
          <div style={{ maxWidth: '400px', margin: '0 auto 40px auto' }}>
            <Pie data={prepareChartData()} />
          </div>

          <div className="filter-buttons">
            <button onClick={fetchEducationalContents}>Tous les contenus</button>
            {patientConditions.map(condition => (
              <button 
                key={condition} 
                onClick={() => fetchContentsByDisease(condition)}
              >
                {condition.charAt(0).toUpperCase() + condition.slice(1)}
              </button>
            ))}
          </div>

          <div className="recommendations-list">
            {educationalContents.length > 0 ? (
              educationalContents.map((content) => (
                <div key={content.id} className="recommendation-card">
                  <div className="rec-header">
                    {getCategoryIcon(content.category)}
                    <div>
                      <h3>{content.title}</h3>
                      <span className="disease-tag">
                        {content.diseaseType.charAt(0).toUpperCase() + content.diseaseType.slice(1)}
                      </span>
                    </div>
                  </div>
                  <p className="content-category">Catégorie: {content.category}</p>
                  <div className="content-body">
                    {content.content.startsWith('http') ? (
                      <a href={content.content} target="_blank" rel="noopener noreferrer">
                        {content.content}
                      </a>
                    ) : (
                      <p>{content.content}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Aucun contenu éducatif disponible pour cette catégorie.</p>
            )}
          </div>
        </>
      )}

      {/* Styles CSS */}
      <style jsx>{`
        .recommendations-main {
          padding: 30px 40px;
          max-width: 1200px;
          margin: 0 auto;
          flex-grow: 1;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .recommendations-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #0f766e;
          margin-bottom: 30px;
          text-align: center;
        }
        .filter-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .filter-buttons button {
          padding: 8px 16px;
          background-color: #0f766e;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .filter-buttons button:hover {
          background-color: #0d9488;
        }
        .recommendations-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }
        .recommendation-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(15, 118, 110, 0.15);
          padding: 20px 25px;
          transition: box-shadow 0.3s ease;
        }
        .recommendation-card:hover {
          box-shadow: 0 6px 15px rgba(15, 118, 110, 0.3);
        }
        .rec-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .rec-header div {
          display: flex;
          flex-direction: column;
        }
        .disease-tag {
          background-color: #e0f2fe;
          color: #0369a1;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          align-self: flex-start;
        }
        .content-category {
          font-size: 0.9rem;
          color: #64748b;
          margin-bottom: 10px;
        }
        .recommendation-card h3 {
          color: #0f766e;
          font-size: 1.25rem;
          margin: 0 0 4px 0;
        }
        .recommendation-card p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.5;
        }
        .content-body a {
          color: #3b82f6;
          text-decoration: none;
          word-break: break-all;
        }
        .content-body a:hover {
          text-decoration: underline;
        }
        .error-message {
          color: #ef4444;
          text-align: center;
        }
      `}</style>
    </main>
  );
};

export default RecommendationsPage;