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
  // Vérification approfondie des données
  if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow">
        Aucune donnée de symptôme disponible
      </div>
    );
  }

  // Filtrage et transformation des données
  const chartData = symptoms
    .filter(s => s.date && (s.painLevel !== undefined || s.fatigueLevel !== undefined))
    .map(s => ({
      date: s.date,
      painLevel: Number(s.painLevel) || 0,
      fatigueLevel: Number(s.fatigueLevel) || 0
    }));

  if (chartData.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow">
        Les données existent mais ne contiennent pas les champs nécessaires (date, painLevel ou fatigueLevel)
      </div>
    );
  }

  // Configuration du graphique
  const data = {
    labels: chartData.map(s => new Date(s.date).toLocaleDateString('fr-FR')),
    datasets: [
      {
        label: 'Douleur',
        data: chartData.map(s => s.painLevel),
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.3
      },
      {
        label: 'Fatigue',
        data: chartData.map(s => s.fatigueLevel),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y}/10`;
            }
            return label;
          }
        }
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 10,
        title: {
          display: true,
          text: 'Intensité (0-10)'
        }
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Évolution des symptômes</h2>
      <Line data={data} options={options} />
    </div>
  );
};

SymptomChart.propTypes = {
  symptoms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      painLevel: PropTypes.number,
      fatigueLevel: PropTypes.number,
    })
  ),
};

SymptomChart.defaultProps = {
  symptoms: [],
};

export default SymptomChart;