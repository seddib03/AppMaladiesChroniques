import { useEffect, useState } from 'react';
import SymptomForm from '../assets/components/Common/HealthDiary/SymptomForm';
import healthService from '../services/healthService';
import Sidebar from '../assets/components/Common/Sidebar';
import Topbar from '../assets/components/Common/Topbar';
import './css/HealthDiaryPage.css';

const HealthDiaryPage = () => {
  const [symptoms, setSymptoms] = useState([]);
  const userName = 'Amal'; // à rendre dynamique plus tard

  useEffect(() => {
    healthService.getSymptoms()
      .then(data => setSymptoms(data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = async (symptom) => {
    const newSymptom = await healthService.addSymptom(symptom);
    setSymptoms([...symptoms, newSymptom]);
  };

  return (
    <div className="diary-container">
      <Sidebar />
      <div className="diary-content">
        <Topbar userName={userName} />
        <main className="diary-main">
          <h1 className="diary-title">📝 Journal de santé</h1>
          <div className="form-section">
            <SymptomForm onAdd={handleAdd} />
          </div>
          <div className="symptom-list">
            {symptoms.map(sym => (
              <div className="symptom-card" key={sym.id}>
                <h3>{sym.type}</h3>
                <p>Intensité : {sym.intensity}</p>
                <p>Date : {sym.date}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HealthDiaryPage;
