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
      setError('');
      try {
        const data = await healthService.getAppointments(userId);
        
        // Vérification et formatage des données
        const formattedAppointments = Array.isArray(data)
          ? data.map(app => ({
              ...app,
              date: app.date ? new Date(app.date) : null
            }))
          : [];
        
        setAppointments(formattedAppointments);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.response?.data?.message || 'Erreur lors du chargement des rendez-vous');
        setAppointments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  const handleAdd = async (appointment) => {
    setError('');
    setSuccess('');
    try {
      const newAppointment = await healthService.addAppointment(userId, appointment);
      
      // Validation de la réponse
      if (!newAppointment?.id) {
        throw new Error('Réponse du serveur invalide');
      }

      setAppointments(prev => [
        ...prev,
        {
          ...newAppointment,
          date: newAppointment.date ? new Date(newAppointment.date) : null
        }
      ]);
      
      setSuccess('Rendez-vous ajouté avec succès !');
      setTimeout(() => setSuccess(''), 5000);
    } catch (err) {
      console.error('Add error:', err);
      setError(err.response?.data?.message || err.message || "Erreur lors de l'ajout du rendez-vous");
    }
  };

  return (
    <div className="appointment-page container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Gestion des Rendez-vous</h1>
      
      {/* Messages d'état */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
          <p>{success}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulaire */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Nouveau Rendez-vous</h2>
          <AppointmentForm 
            onAdd={handleAdd} 
            disabled={loading}
          />
        </div>
        
        {/* Liste */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Mes Rendez-vous</h2>
            {loading && (
              <span className="text-sm text-gray-500">Chargement...</span>
            )}
          </div>
          
          {!loading && appointments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <p>Aucun rendez-vous programmé</p>
              <p className="text-sm mt-2">Utilisez le formulaire pour ajouter un rendez-vous</p>
            </div>
          ) : (
            <AppointmentList 
              appointments={appointments} 
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;