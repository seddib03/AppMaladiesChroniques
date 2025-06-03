import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const MedicationForm = ({ onAdd }) => {
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    frequency: '',
    startDate: '',
    endDate: '',
    taken: false,
    needsRenewal: false,
    time: '',  // ajout du champ time
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewMed({
      ...newMed,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(newMed);
    setNewMed({
      name: '',
      dosage: '',
      frequency: '',
      startDate: '',
      endDate: '',
      taken: false,
      needsRenewal: false,
      time: '',  // reset aussi time
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label>Nom du Médicament</label>
        <input type="text" name="name" value={newMed.name} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Dosage</label>
        <input type="text" name="dosage" value={newMed.dosage} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Fréquence</label>
        <input type="text" name="frequency" value={newMed.frequency} onChange={handleChange} required className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Date de Début</label>
        <input type="date" name="startDate" value={newMed.startDate} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Date de Fin</label>
        <input type="date" name="endDate" value={newMed.endDate} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Heure de prise</label>
        <input type="time" name="time" value={newMed.time} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>
      <div className="flex items-center gap-2">
        <label>Pris</label>
        <input type="checkbox" name="taken" checked={newMed.taken} onChange={handleChange} />
      </div>
      <div className="flex items-center gap-2">
        <label>Renouvellement nécessaire</label>
        <input type="checkbox" name="needsRenewal" checked={newMed.needsRenewal} onChange={handleChange} />
      </div>
      <Button type="submit">Ajouter Médicament</Button>
    </form>
  );
};

MedicationForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default MedicationForm;
