import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const AppointmentForm = ({ onAdd, successMessage }) => {
  const [newAppointment, setNewAppointment] = useState({ 
    date: '', 
    doctorName: '', 
    reason: '', 
    location: '' 
  });
  const [error, setError] = useState('');
  const [localSuccess, setLocalSuccess] = useState('');

  useEffect(() => {
    if (successMessage) {
      setLocalSuccess(successMessage);
      // Réinitialiser le formulaire si succès
      setNewAppointment({ date: '', doctorName: '', reason: '', location: '' });
    }
  }, [successMessage]);

  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
    // Effacer les messages quand l'utilisateur commence à taper
    if (error) setError('');
    if (localSuccess) setLocalSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLocalSuccess('');
    
    try {
      if (!newAppointment.date || !newAppointment.doctorName || 
          !newAppointment.reason || !newAppointment.location) {
        throw new Error('Tous les champs sont obligatoires');
      }

      await onAdd({
        ...newAppointment,
        date: new Date(newAppointment.date).toISOString()
      });
    } catch (err) {
      setError(err.message || "Erreur lors de l'ajout du rendez-vous");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      {error && (
        <div className="text-red-500 mb-4 p-2 bg-red-50 rounded">
          {error}
        </div>
      )}
      
      {localSuccess && (
        <div className="text-green-500 mb-4 p-2 bg-green-50 rounded">
          {localSuccess}
        </div>
      )}
      
      <div>
        <label className="block text-gray-700">Date et Heure</label>
        <input
          type="datetime-local"
          name="date"
          value={newAppointment.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Docteur</label>
        <input
          type="text"
          name="doctorName"
          value={newAppointment.doctorName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Motif</label>
        <input
          type="text"
          name="reason"
          value={newAppointment.reason}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Lieu</label>
        <input
          type="text"
          name="location"
          value={newAppointment.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <Button type="submit">Ajouter Rendez-vous</Button>
    </form>
  );
};

AppointmentForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
};

export default AppointmentForm;