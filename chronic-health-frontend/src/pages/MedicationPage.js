import { useEffect, useState } from 'react';
import MedicationForm from '../assets/components/Common/Medication/MedicationForm';
import MedicationList from '../assets/components/Common/Dashboard/MedicationList';
import healthService from '../services/healthService';
import './css/MedicationPage.css';


const MedicationPage = () => {
  const [medications, setMedications] = useState([]);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [refreshKey, setRefreshKey] = useState(0); // Pour forcer la mise à jour
  const userId = 1;

  
useEffect(() => {
  if (userId) {
    const fetchMedications = async () => {
      try {
        const data = await healthService.getMedications(userId);
        setMedications(data);
      } catch (err) {
        setError('Erreur lors du chargement des médicaments.');
      }
    };
    fetchMedications();
  }
}, [userId, refreshKey]);

  const handleAdd = async (medication) => {
    try {
      const completeMedication = {
        ...medication,
        user: { id: userId },
      };
      await healthService.addMedication(completeMedication);
      setRefreshKey((prev) => prev + 1); // Forcer la re-récupération
      setSuccessMsg('Médicament ajouté avec succès !');
      setError('');
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
      console.error('Erreur lors de l’ajout:', err);
      setError('Impossible d’ajouter le médicament.');
      setSuccessMsg('');
    }
  };

  return (
    <div className="medication-page">
      <h1 className="medication-title">Gestion des Médicaments</h1>
      {error && <div className="medication-error">{error}</div>}
      {successMsg && <div className="medication-success">{successMsg}</div>}

      <div className="medication-form-container">
        <MedicationForm onAdd={handleAdd} />
      </div>

      <div className="medication-list-container">
        <MedicationList medications={medications} />
      </div>
    </div>
  );
};

export default MedicationPage;