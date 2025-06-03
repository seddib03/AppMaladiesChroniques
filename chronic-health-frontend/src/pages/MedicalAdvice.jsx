// src/pages/MedicalAdvice.jsx
import React, { useState } from 'react';
import './css/MedicalAdvice.css';

const MedicalAdvice = () => {
  const [userInput, setUserInput] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/ai/advice', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: userInput,
      });
      const result = await response.text();
      setAdvice(result);
    } catch (error) {
      setAdvice('Une erreur est survenue.');
    }
    setLoading(false);
  };

  return (
    <div className="medical-advice-container">
      <h2>Assistant Médical IA</h2>
      <textarea
        rows="5"
        placeholder="Décrivez vos symptômes ou posez une question..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleAskAI} disabled={loading}>
        {loading ? 'Chargement...' : 'Obtenir un conseil'}
      </button>
      {advice && (
        <div className="advice-result">
          <h4>Conseil de l'IA :</h4>
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
};

export default MedicalAdvice;
