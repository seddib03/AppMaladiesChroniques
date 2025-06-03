import React, { useEffect, useState } from 'react';
import healthService from '../../../../services/healthService';

const AppointmentList = ({ userId }) => {
  console.log("RENDER - AppointmentList, userId:", userId); // Debug 1
  
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log("EFFECT - Fetching appointments for userId:", userId); // Debug 2
    
    const fetchAppointments = async () => {
      try {
        console.log("Starting fetch..."); // Debug 3
        const data = await healthService.getAppointments(userId);
        console.log("API Response Data:", data); // Debug 4
        
        setAppointments(data || []);
        setError('');
      } catch (err) {
        console.error("Fetch Error:", err); // Debug 5
        setError(err.message);
        setAppointments([]);
      } finally {
        console.log("Fetch completed"); // Debug 6
        setLoading(false);
      }
    };

    if (userId) fetchAppointments();
  }, [userId]);

  console.log("Current state:", { loading, error, appointments }); // Debug 7

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-red-500">Erreur : {error}</p>;

  return (
    <div>
      <h2>Mes Rendez-vous</h2>
      {appointments.length === 0 ? (
        <p>Aucun rendez-vous programmé.</p>
      ) : (
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id}>
              {appointment.doctorName} - {new Date(appointment.date).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;