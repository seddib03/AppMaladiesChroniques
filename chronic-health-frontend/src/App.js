import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import MedicationPage from './pages/MedicationPage';
import HealthDiaryPage from './pages/HealthDiaryPage';
import AppointmentPage from './pages/AppointmentPage';
import NotificationPage from './pages/NotificationPage';
import RecommendationsPage from './pages/RecommendationsPage';
import MedicalAdvice from './pages/MedicalAdvice';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages accessibles librement */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/medications" element={<MedicationPage />} />
        <Route path="/health-diary" element={<HealthDiaryPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/ai-medical-advice" element={<MedicalAdvice />} />

        {/* Redirection racine vers le dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Redirection si route inconnue */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
