import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const SymptomForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    date: '',
    painLevel: '',
    fatigueLevel: '',
    asthmaCrisis: '',
    symptomsDescription: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // Validation
      if (!formData.date || formData.painLevel === '') {
        throw new Error('Date et niveau de douleur sont obligatoires');
      }

      // Formatage des données pour le backend
      const entryToSend = {
        ...formData,
        date: formData.date, // Le format YYYY-MM-DD est déjà bon
        painLevel: parseInt(formData.painLevel),
        fatigueLevel: formData.fatigueLevel ? parseInt(formData.fatigueLevel) : 0,
        asthmaCrisis: formData.asthmaCrisis ? parseInt(formData.asthmaCrisis) : 0,
      };

      await onAdd(entryToSend);
      
      // Réinitialisation et message de succès
      setFormData({
        date: '',
        painLevel: '',
        fatigueLevel: '',
        asthmaCrisis: '',
        symptomsDescription: '',
      });
      setSuccess('Entrée ajoutée avec succès!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      {error && <div className="text-red-500 p-2 mb-4 rounded bg-red-50">{error}</div>}
      {success && <div className="text-green-500 p-2 mb-4 rounded bg-green-50">{success}</div>}

      <div>
        <label className="block text-gray-700">Date*</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">Niveau de douleur (0-10)*</label>
        <input
          type="number"
          name="painLevel"
          value={formData.painLevel}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          min="0"
          max="10"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">Niveau de fatigue (0-10)</label>
        <input
          type="number"
          name="fatigueLevel"
          value={formData.fatigueLevel}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          min="0"
          max="10"
        />
      </div>

      <div>
        <label className="block text-gray-700">Crise d'asthme (0=non, 1=oui)</label>
        <select
          name="asthmaCrisis"
          value={formData.asthmaCrisis}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="0">Non</option>
          <option value="1">Oui</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700">Description des symptômes</label>
        <textarea
          name="symptomsDescription"
          value={formData.symptomsDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
        />
      </div>

      <Button type="submit">Enregistrer</Button>
    </form>
  );
};

SymptomForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default SymptomForm;