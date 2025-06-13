import React, { useEffect, useState } from 'react';
import healthService from '../../../../services/healthService';

const AppointmentList = ({ appointments }) => {
  if (!appointments) return <p>Chargement...</p>;
  if (appointments.length === 0) return <p>Aucun rendez-vous programmé.</p>;

  return (
    <ul>
      {appointments.map((appointment) => (
        <li key={appointment.id}>
          {appointment.doctorName} - {new Date(appointment.date).toLocaleString()}
        </li>
      ))}
    </ul>
  );
};


export default AppointmentList;