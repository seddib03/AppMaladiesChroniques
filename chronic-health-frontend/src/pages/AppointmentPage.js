import { useEffect, useState } from 'react';
import AppointmentForm from '../assets/components/Common/Appointment/AppointmentForm';
import AppointmentList from '../assets/components/Common/Dashboard/AppointmentList';
import healthService from '../services/healthService';
import './css/AppointmentPage.css';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);

  // Simuler la récupération du userId (à adapter selon ta logique)
  useEffect(() => {
    // Par exemple, récupérer userId depuis localStorage ou API d'authentification
    const storedUserId = 1; // Remplace par ta vraie source
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    if (!userId) return; // Ne pas appeler l'API si userId non disponible

    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const data = await healthService.getAppointments(userId);
        setAppointments(data);
        setError('');
      } catch (err) {
        setError('Erreur lors du chargement des rendez-vous.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  const handleAdd = async (appointment) => {
    try {
      const newAppointment = await healthService.addAppointment(userId, appointment);
      setAppointments(prev => [...prev, newAppointment]);
    } catch {
      setError('Erreur lors de l\'ajout du rendez-vous.');
    }
  };

  return (
    <div className="appointment-page">
      <h1 className="appointment-title">Rendez-vous</h1>

      {loading && <div className="appointment-loading">Chargement en cours...</div>}
      {error && <div className="appointment-error">{error}</div>}

      {!loading && !error && (
        <>
          <AppointmentForm onAdd={handleAdd} />
          {appointments.length === 0 ? (
            <p className="appointment-empty">Aucun rendez-vous pour le moment.</p>
          ) : (
            <AppointmentList appointments={appointments} />
          )}
        </>
      )}
    </div>
  );
};

export default AppointmentPage;
