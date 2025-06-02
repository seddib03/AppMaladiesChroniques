import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const SymptomForm = ({ onAdd }) => {
  const [newSymptom, setNewSymptom] = useState({ type: '', intensity: '', date: '', comment: '' });

  const handleChange = (e) => {
    setNewSymptom({ ...newSymptom, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(newSymptom);
    setNewSymptom({ type: '', intensity: '', date: '', comment: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label className="block text-gray-700">Symptom Type</label>
        <input
          type="text"
          name="type"
          value={newSymptom.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Intensity</label>
        <input
          type="number"
          name="intensity"
          value={newSymptom.intensity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={newSymptom.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Comment</label>
        <textarea
          name="comment"
          value={newSymptom.comment}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <Button type="submit">Add Symptom</Button>
    </form>
  );
};

SymptomForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default SymptomForm;