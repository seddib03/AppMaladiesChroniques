import { useEffect, useState } from 'react';
import SymptomForm from '../assets/components/Common/HealthDiary/SymptomForm';
import SymptomChart from '../assets/components/Common/Dashboard/SymptomChart'; // Ajout de l'import
import healthService from '../services/healthService';
import Sidebar from '../assets/components/Common/Sidebar';
import Topbar from '../assets/components/Common/Topbar';
import './css/HealthDiaryPage.css';
function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

const HealthDiaryPage = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = parseJwt(token);
      if (decoded) {
        setUserName(decoded.sub || 'Utilisateur');
        setUserId(decoded.userId || 1);
      }
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchEntries = async () => {
      try {
        setLoading(true);
        const response = await healthService.getSymptoms(userId);
        
        console.log('Données reçues:', response); // Debug
        
        // Normalisation des données
        const data = Array.isArray(response) 
          ? response.map(entry => ({
              ...entry,
              painLevel: Number(entry.painLevel) || 0,
              fatigueLevel: Number(entry.fatigueLevel) || 0,
              asthmaCrisis: Number(entry.asthmaCrisis) || 0
            }))
          : [];
          
        setEntries(data);
        setError('');
      } catch (err) {
        console.error('Erreur de chargement:', err);
        setError('Erreur lors du chargement des données');
        setEntries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, [userId]);

  const handleAdd = async (entry) => {
    try {
      const entryWithUser = {
        ...entry,
        painLevel: Number(entry.painLevel),
        fatigueLevel: Number(entry.fatigueLevel) || 0,
        asthmaCrisis: Number(entry.asthmaCrisis) || 0,
        user: { id: userId }
      };
      
      const newEntry = await healthService.addSymptom(entryWithUser);
      setEntries(prev => [...prev, {
        ...newEntry,
        painLevel: Number(newEntry.painLevel),
        fatigueLevel: Number(newEntry.fatigueLevel) || 0
      }]);
    } catch (err) {
      setError("Erreur lors de l'ajout de l'entrée");
      console.error(err);
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('fr-FR');
    } catch {
      return dateString;
    }
  };

  return (
    <div className="diary-container">
      <Sidebar />
      <div className="diary-content">
        <Topbar userName={userName} />
        <main className="diary-main">
          <h1 className="diary-title">📝 Journal de santé</h1>
          
          {error && <div className="diary-error">{error}</div>}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <SymptomForm onAdd={handleAdd} />
            </div>
            
            <div className="space-y-6">
              {loading ? (
                <p>Chargement en cours...</p>
              ) : (
                <>
                  {/* Ajout du graphique */}
                  <SymptomChart symptoms={entries} />
                  
                  <div className="entries-list">
                    <h2 className="text-xl font-semibold mb-4">Historique</h2>
                    {entries.length === 0 ? (
                      <p>Aucune entrée enregistrée</p>
                    ) : (
                      <div className="space-y-4">
                        {entries.map(entry => (
                          <div key={entry.id} className="entry-card p-4 border rounded">
                            <h3 className="font-medium">
                              {formatDate(entry.date)}
                            </h3>
                            <p>Douleur: {entry.painLevel}/10</p>
                            {entry.fatigueLevel > 0 && <p>Fatigue: {entry.fatigueLevel}/10</p>}
                            {entry.asthmaCrisis > 0 && <p>⚠️ Crise d'asthme</p>}
                            {entry.symptomsDescription && (
                              <p className="mt-2 text-gray-600">{entry.symptomsDescription}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HealthDiaryPage;