import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const AppointmentForm = ({ onAdd }) => {
  const [newAppointment, setNewAppointment] = useState({ date: '', doctor: '', type: '', location: '' });

  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onAdd(newAppointment);
    setNewAppointment({ date: '', doctor: '', type: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div>
        <label className="block text-gray-700">Date</label>
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
        <label className="block text-gray-700">Doctor</label>
        <input
          type="text"
          name="doctor"
          value={newAppointment.doctor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Type</label>
        <input
          type="text"
          name="type"
          value={newAppointment.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={newAppointment.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <Button type="submit">Add Appointment</Button>
    </form>
  );
};

AppointmentForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AppointmentForm;