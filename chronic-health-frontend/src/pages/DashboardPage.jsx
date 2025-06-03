import { useEffect, useState } from 'react';
import SymptomChart from '../assets/components/Common/Dashboard/SymptomChart';
import healthService from '../services/healthService';
import Sidebar from '../assets/components/Common/Sidebar';
import Topbar from '../assets/components/Common/Topbar';
import './css/DashboardPage.css';

function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
}

const DashboardPage = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = parseJwt(token);
      if (payload && payload.sub) {  // ou payload.username selon ta structure
        setUserName(payload.sub);
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const symptomData = await healthService.getSymptoms();
        setSymptoms(symptomData);
      } catch (err) {
        console.error('Erreur:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Topbar userName={userName} />
        <main className="main-section">
          <h1>Bienvenue sur votre tableau de bord</h1>
          <div className="card">
            <h2>Évolution des symptômes</h2>
            <SymptomChart symptoms={symptoms} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
