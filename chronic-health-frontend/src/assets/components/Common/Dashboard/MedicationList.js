import React, { useEffect, useState } from 'react';
import healthService from '../../../../services/healthService';

const MedicationList = ({ userId }) => {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const data = await healthService.getMedications(userId);
        console.log('API medications:', data);
        setMedications(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Erreur lors du chargement des médicaments :', error);
        setMedications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMedications();
  }, [userId]);

  if (loading) return <p>Chargement des médicaments...</p>;

  return (
    <div>
      <h2>Mes Médicaments</h2>
      {Array.isArray(medications) && medications.length > 0 ? (
        medications.map((med) => (
          <div key={med.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h4>{med.name}</h4>
            <p>Dosage : {med.dosage}</p>
            <p>Fréquence : {med.frequency}</p>
            <p>Heure de prise : {med.time ? med.time : 'Non spécifiée'}</p>  {/* Ajout de l'heure */}
          </div>
        ))
      ) : (
        <p>Aucun médicament trouvé.</p>
      )}
    </div>
  );
};

export default MedicationList;
