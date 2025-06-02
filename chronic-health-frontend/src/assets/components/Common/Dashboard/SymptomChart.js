import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SymptomChart = ({ symptoms }) => {
  const data = {
    labels: symptoms.map(s => new Date(s.date).toLocaleDateString()),
    datasets: [{
      label: 'Symptom Intensity',
      data: symptoms.map(s => s.intensity),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Symptom Trends</h2>
      <Line data={data} />
    </div>
  );
};

SymptomChart.propTypes = {
  symptoms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      intensity: PropTypes.number,
    })
  ).isRequired,
};

export default SymptomChart;