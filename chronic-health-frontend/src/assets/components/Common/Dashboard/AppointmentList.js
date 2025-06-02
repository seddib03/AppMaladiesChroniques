import PropTypes from 'prop-types';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Appointments</h2>
      <ul>
        {appointments.map(appt => (
          <li key={appt.id} className="mb-2">
            {appt.date} - {appt.doctor} ({appt.type}) at {appt.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

AppointmentList.propTypes = {
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      doctor: PropTypes.string,
      type: PropTypes.string,
      location: PropTypes.string,
    })
  ).isRequired,
};

export default AppointmentList;