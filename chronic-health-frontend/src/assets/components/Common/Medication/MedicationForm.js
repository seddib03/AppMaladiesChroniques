import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const MedicationForm = ({ onAdd }) => {
  const [newMed, setNewMed] = useState({ name: '', dosage: '', frequency: '' });

  const handleChange = (e) => {
    setNewMed({ ...newMed, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(newMed);
    setNewMed({ name: '', dosage: '', frequency: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label className="block text-gray-700">Medication Name</label>
        <input
          type="text"
          name="name"
          value={newMed.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Dosage</label>
        <input
          type="text"
          name="dosage"
          value={newMed.dosage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Frequency</label>
        <input
          type="text"
          name="frequency"
          value={newMed.frequency}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <Button type="submit">Add Medication</Button>
    </form>
  );
};

MedicationForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default MedicationForm;