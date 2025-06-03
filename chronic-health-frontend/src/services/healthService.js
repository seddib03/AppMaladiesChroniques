import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Fonction utilitaire pour récupérer l'userId depuis le localStorage (si tu l’y stockes)
const getUserIdFromToken = () => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      return JSON.parse(user).id;
    } catch {
      return null;
    }
  }
  return null;
};

const healthService = {
getSymptoms: async (userId) => {
    try {
      const response = await api.get(`/diary/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching symptoms:', error);
      throw error;
    }
  },

  addSymptom: async (entry) => {
    try {
      const response = await api.post('/diary', entry);
      return response.data;
    } catch (error) {
      console.error('Error adding symptom:', error);
      throw error;
    }
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
    try {
      console.log(`Fetching appointments for user ${userId}`);
      const response = await api.get(`/appointments/user/${userId}`);
      console.log('API Response:', response.data);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching appointments:', error);
      return [];
    }
  },

  addAppointment: async (userId, appointment) => {
    try {
      const appointmentData = {
        ...appointment,
        user: { id: userId }
      };
      const response = await api.post('/appointments', appointmentData);
      return response.data;
    } catch (error) {
      console.error('Error adding appointment:', error);
      throw error;
    }
  },
  getAllEducationalContent: async () => {
    try {
      const response = await api.get('/educational-content');
      return response.data;
    } catch (error) {
      console.error('Error fetching educational content:', error);
      throw error;
    }
  },
  getEducationalContents: async () => {
    try {
      const response = await api.get('/educational-content');
      return response.data;
    } catch (error) {
      console.error('Error fetching educational contents:', error);
      throw error;
    }
  },

  getEducationalContentByDisease: async (diseaseType) => {
    try {
      const response = await api.get(`/educational-content/disease/${diseaseType}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching educational content for ${diseaseType}:`, error);
      throw error;
    }
  },
  createEducationalContent: async (content) => {
    try {
      const response = await api.post('/educational-content', content);
      return response.data;
    } catch (error) {
      console.error('Error creating educational content:', error);
      throw error;
    }
  },

  updateEducationalContent: async (id, content) => {
    try {
      const response = await api.put(`/educational-content/${id}`, content);
      return response.data;
    } catch (error) {
      console.error(`Error updating educational content ${id}:`, error);
      throw error;
    }
  },

  getUserNotifications: async (userId) => {
    const response = await axios.get(`/api/notifications/user/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return response.data;
  },

  markNotificationAsRead: async (notificationId) => {
    await axios.put(`/api/notifications/${notificationId}/read`, {}, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
  },
  deleteEducationalContent: async (id) => {
    try {
      await api.delete(`/educational-content/${id}`);
    } catch (error) {
      console.error(`Error deleting educational content ${id}:`, error);
      throw error;
    }
  },

  getPatientConditions: async (userId) => {
    // Ceci est une fausse API, à remplacer par un appel réel si nécessaire
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['diabetique']);
      }, 1000);
    });
  },
};

export default healthService;
