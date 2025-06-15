import React from 'react';

const AppointmentList = ({ appointments }) => {
  if (!appointments) return <p>Chargement...</p>;
  if (!Array.isArray(appointments)) return <p>Format de données invalide</p>;
  if (appointments.length === 0) return <p>Aucun rendez-vous programmé.</p>;

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="p-4 border rounded shadow">
          <h3 className="font-bold">{appointment.doctorName}</h3>
          <p>Date: {new Date(appointment.date).toLocaleString()}</p>
          <p>Lieu: {appointment.location}</p>
          <p>Motif: {appointment.reason}</p>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;