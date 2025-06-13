import { useEffect, useState } from 'react';
import AppointmentForm from '../assets/components/Common/Appointment/AppointmentForm';
import AppointmentList from '../assets/components/Common/Dashboard/AppointmentList';
import healthService from '../services/healthService';
import './css/AppointmentPage.css';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userId] = useState(1); // À remplacer par votre logique d'authentification

  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const data = await healthService.getAppointments(userId);
        setAppointments(data);
        setError('');
      } catch (err) {
        setError('Erreur lors du chargement des rendez-vous.');
        setAppointments([]);
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
      setError('');
      setSuccess('Rendez-vous ajouté avec succès !');
      
      setTimeout(() => {
        setSuccess('');
      }, 5000);
    } catch (err) {
      setError(err.message || "Erreur lors de l'ajout du rendez-vous.");
      setSuccess('');
    }
  };

  return (
    <div className="appointment-page container mx-auto p-4">
      <h1 className="appointment-title text-2xl font-bold mb-6">Gestion des Rendez-vous</h1>
      
      {error && (
        <div className="appointment-error bg-red-100 text-red-700 p-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="appointment-success bg-green-100 text-green-700 p-3 rounded mb-4">
          {success}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Nouveau Rendez-vous</h2>
          <AppointmentForm onAdd={handleAdd} />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Mes Rendez-vous</h2>
          {loading ? (
            <p className="appointment-loading text-gray-500">Chargement en cours...</p>
          ) : (
            <AppointmentList appointments={appointments} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;