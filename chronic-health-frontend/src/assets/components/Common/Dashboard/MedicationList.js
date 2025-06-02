import PropTypes from 'prop-types';

const MedicationList = ({ medications }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Medications</h2>
      <ul>
        {medications.map(med => (
          <li key={med.id} className="mb-2">
            {med.name} - {med.dosage} ({med.frequency})
          </li>
        ))}
      </ul>
    </div>
  );
};

MedicationList.propTypes = {
  medications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      dosage: PropTypes.string,
      frequency: PropTypes.string,
    })
  ).isRequired,
};

export default MedicationList;