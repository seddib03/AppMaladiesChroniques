import React, { useEffect } from 'react';

const MedicationList = ({ medications }) => {
  // Log pour vérifier que les médicaments reçus sont corrects
  useEffect(() => {
    console.log('Médicaments reçus dans MedicationList :', medications);
  }, [medications]);

  if (!Array.isArray(medications)) {
    return <p>Les médicaments ne sont pas dans un format valide.</p>;
  }

  if (medications.length === 0) {
    return <p>Aucun médicament trouvé.</p>;
  }

  return (
    <div>
      <h2>Mes Médicaments</h2>
      {medications.map((med) => (
        <div
          key={med.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h4 style={{ margin: '0 0 10px 0' }}>{med.name}</h4>
          <p><strong>Dosage :</strong> {med.dosage}</p>
          <p><strong>Fréquence :</strong> {med.frequency}</p>
          <p><strong>Heure de prise :</strong> {med.time ? med.time : 'Non spécifiée'}</p>
          <p><strong>Début du traitement :</strong> {med.startDate || 'Non spécifié'}</p>
          <p><strong>Fin du traitement :</strong> {med.endDate || 'Non spécifié'}</p>
          <p><strong>Pris :</strong> {med.taken ? 'Oui' : 'Non'}</p>
          <p><strong>Renouvellement nécessaire :</strong> {med.needsRenewal ? 'Oui' : 'Non'}</p>
        </div>
      ))}
    </div>
  );
};

export default MedicationList;