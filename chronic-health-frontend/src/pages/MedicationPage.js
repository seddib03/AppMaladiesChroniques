import { useEffect, useState } from 'react';
import MedicationForm from '../assets/components/Common/Medication/MedicationForm';
import MedicationList from '../assets/components/Common/Dashboard/MedicationList';
import healthService from '../services/healthService';
import './css/MedicationPage.css';

const MedicationPage = () => {
  const [medications, setMedications] = useState([]);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const userId = 1; // Remplace ça par l’ID réel de l’utilisateur connecté

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const data = await healthService.getMedications(userId);
        setMedications(data);
      } catch (err) {
        setError('Erreur lors du chargement des médicaments.');
      }
    };
    fetchMedications();
  }, []);

  const handleAdd = async (medication) => {
    try {
      const completeMedication = {
        ...medication,
        user: { id: userId }, // important pour le backend
      };
      const newMed = await healthService.addMedication(completeMedication);
      setMedications((prev) => [...prev, newMed]);
      setSuccessMsg('Médicament ajouté avec succès !');
      setError('');
      setTimeout(() => setSuccessMsg(''), 3000);
    } catch (err) {
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
