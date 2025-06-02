import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // URL de ton backend
  headers: {
    'Content-Type': 'application/json'
  }
});

const healthService = {
  getSymptoms: async () => {
    const response = await api.get('/health-diary');
    return response.data;
  },
  addSymptom: async (symptom) => {
    const response = await api.post('/health-diary', symptom);
    return response.data;
  },
  getMedications: async () => {
    const response = await api.get('/medications');
    return response.data;
  },
  addMedication: async (medication) => {
    const response = await api.post('/medications', medication);
    return response.data;
  },
  getAppointments: async (userId) => {
    const response = await api.get(`/appointments/${userId}`);
    return response.data;
  },
  addAppointment: async (userId, appointment) => {
    const response = await api.post(`/appointments/${userId}`, appointment);
    return response.data;
  },
  getNotifications: async () => {
    const response = await api.get('/notifications');
    return response.data;
  },
  getPatientConditions: async (userId) => {
    // Exemple: simulation d'appel API, à remplacer par ton backend réel
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['diabetique']); // Exemple : patient diabétique
      }, 1000);
    });
  },
};

export default healthService;
