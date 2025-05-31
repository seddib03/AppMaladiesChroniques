import React, { useState } from 'react';
import { addDiaryEntry } from '../../api/diary';

const DiaryForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    date: '',
    symptoms: '',
    medications: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = await addDiaryEntry(form);
    onAdd(newEntry);
    setForm({ date: '', symptoms: '', medications: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="symptoms" placeholder="Symptômes" value={form.symptoms} onChange={handleChange} required />
      <input name="medications" placeholder="Médicaments" value={form.medications} onChange={handleChange} required />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default DiaryForm;
