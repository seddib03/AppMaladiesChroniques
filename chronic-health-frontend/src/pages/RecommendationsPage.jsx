import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaAppleAlt, FaRunning, FaHeartbeat } from 'react-icons/fa';

Chart.register(ArcElement, Tooltip, Legend);

// Exemple de recommandations selon conditions
const recommendationsByCondition = {
  diabetique: [
    {
      title: 'Régime Diabétique',
      description: 'Favoriser les aliments à faible index glycémique.',
      icon: <FaAppleAlt color="#0f766e" size={24} />,
    },
    {
      title: 'Exercice Physique',
      description: 'Marche rapide 30 minutes par jour.',
      icon: <FaRunning color="#0f766e" size={24} />,
    },
  ],
  hypertension: [
    {
      title: 'Surveiller le sel',
      description: 'Réduire la consommation de sel.',
      icon: <FaHeartbeat color="#0f766e" size={24} />,
    },
    {
      title: 'Activité physique',
      description: 'Activités modérées comme la natation ou marche.',
      icon: <FaRunning color="#0f766e" size={24} />,
    },
  ],
};

const RecommendationsPage = ({ userId }) => {
  const [conditions, setConditions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock fonction pour récupérer les conditions du patient
  const getPatientConditions = async (userId) => {
    // Ici tu appelleras ton API backend réel
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['diabetique', 'hypertension']); // Exemple patient avec 2 conditions
      }, 1000);
    });
  };

  useEffect(() => {
    async function fetchConditions() {
      setLoading(true);
      const conds = await getPatientConditions(userId);
      setConditions(conds);
      setLoading(false);
    }
    fetchConditions();
  }, [userId]);

  // Préparer les données pour le graphique (exemple statique)
  const conditionLabels = ['Diabétique', 'Hypertension', 'Autres'];
  const conditionData = [60, 30, 10];

  const pieData = {
    labels: conditionLabels,
    datasets: [
      {
        label: 'Répartition des conditions',
        data: conditionData,
        backgroundColor: ['#0f766e', '#34d399', '#a3a3a3'],
        borderWidth: 1,
      },
    ],
  };

  // Regrouper les recommandations des conditions du patient
  const recommendations = conditions.flatMap(
    (condition) => recommendationsByCondition[condition] || []
  );

  return (
    <main className="recommendations-main">
      <h1 className="recommendations-title">Recommandations personnalisées</h1>

      {loading ? (
        <p>Chargement des données...</p>
      ) : (
        <>
          <div style={{ maxWidth: '400px', margin: '0 auto 40px auto' }}>
            <Pie data={pieData} />
          </div>

          <div className="recommendations-list">
            {recommendations.length > 0 ? (
              recommendations.map((rec, idx) => (
                <div key={idx} className="recommendation-card">
                  <div className="rec-header">
                    {rec.icon}
                    <h3>{rec.title}</h3>
                  </div>
                  <p>{rec.description}</p>
                </div>
              ))
            ) : (
              <p>Aucune recommandation pour le moment.</p>
            )}
          </div>
        </>
      )}

      {/* Styles CSS inline ou à extraire dans un fichier CSS */}
      <style jsx>{`
        .recommendations-main {
          padding: 30px 40px;
          max-width: 900px;
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
        .recommendations-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
        .recommendation-card h3 {
          color: #0f766e;
          font-size: 1.25rem;
          margin: 0;
        }
        .recommendation-card p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.5;
        }
      `}</style>
    </main>
  );
};

export default RecommendationsPage;
