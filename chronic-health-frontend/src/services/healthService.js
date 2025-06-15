import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8083/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Intercepteur pour ajouter le token JWT
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers = config.headers || {}; // Garantit que headers existe
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('Request Interceptor:', config); // Debug
  return config;
});

// Intercepteur pour gérer les erreurs
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      config: error.config
    });
    
    if (error.response?.status === 401) {
      // Gérer la déconnexion si token expiré
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

// Fonction utilitaire pour récupérer l'userId
const getUserId = () => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      const parsedUser = JSON.parse(user);
      return parsedUser?.id || 1; // Fallback à 1 pour le développement
    } catch {
      return 1; // Fallback à 1 pour le développement
    }
  }
  return 1; // Fallback à 1 pour le développement
};

const healthService = {
  // === RENDEZ-VOUS ===
  getAppointments: async (userId = getUserId()) => {
    try {
      console.log(`[API] Fetching appointments for user ${userId}`);
      const response = await api.get(`/appointments/user/${userId}`);
      
      // Validation de la réponse
      if (!Array.isArray(response.data)) {
        console.warn('[API] Unexpected appointments format:', response.data);
        return [];
      }

      // Formatage des dates
      const appointments = response.data.map(app => ({
        ...app,
        date: app.date ? new Date(app.date) : null,
        // Assure que tous les champs requis sont présents
        id: app.id || Date.now(),
        doctorName: app.doctorName || 'Nom non spécifié',
        location: app.location || 'Lieu non spécifié',
        reason: app.reason || 'Motif non spécifié'
      }));

      console.log('[API] Successfully fetched appointments:', appointments);
      return appointments;
    } catch (error) {
      console.error('[API] Failed to fetch appointments:', error);
      throw new Error('Échec de la récupération des rendez-vous');
    }
  },

  addAppointment: async (appointmentData, userId = getUserId()) => {
    try {
      console.log('[API] Adding appointment:', appointmentData);
      const fullData = {
        ...appointmentData,
        userId // Ajout explicite de l'userId
      };
      
      const response = await api.post('/appointments', fullData);
      
      // Validation de la réponse
      if (!response.data?.id) {
        throw new Error('Réponse du serveur invalide');
      }
      
      console.log('[API] Successfully added appointment:', response.data);
      return {
        ...response.data,
        date: response.data.date ? new Date(response.data.date) : null
      };
    } catch (error) {
      console.error('[API] Failed to add appointment:', error);
      throw new Error(error.response?.data?.message || 'Échec de l\'ajout du rendez-vous');
    }
  },

  // === MÉDICAMENTS ===
  getMedications: async (userId = getUserId()) => {
    try {
      const response = await api.get(`/medications/user/${userId}`);
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching medications:', error);
      throw new Error('Échec de la récupération des médicaments');
    }
  },

  addMedication: async (medication) => {
    try {
      const response = await api.post('/medications', {
        ...medication,
        userId: getUserId() // Ajout de l'userId
      });
      return response.data;
    } catch (error) {
      console.error('Error adding medication:', error);
      throw new Error(error.response?.data?.message || 'Échec de l\'ajout du médicament');
    }
  },

  // === SYMPTÔMES ===
  getSymptoms: async (userId = getUserId()) => {
    try {
      const response = await api.get(`/diary/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching symptoms:', error);
      throw new Error('Échec de la récupération des symptômes');
    }
  },

  addSymptom: async (entry) => {
    try {
      const response = await api.post('/diary', {
        ...entry,
        userId: getUserId() // Ajout de l'userId
      });
      return response.data;
    } catch (error) {
      console.error('Error adding symptom:', error);
      throw new Error(error.response?.data?.message || 'Échec de l\'ajout du symptôme');
    }
  },

  // === CONTENU ÉDUCATIF ===
  getAllEducationalContent: async () => {
    try {
      const response = await api.get('/educational-content');
      return response.data;
    } catch (error) {
      console.error('Error fetching educational content:', error);
      throw new Error('Échec de la récupération du contenu éducatif');
    }
  },

  getEducationalContentByDisease: async (diseaseType) => {
    try {
      const response = await api.get(`/educational-content/disease/${diseaseType}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching content for ${diseaseType}:`, error);
      throw new Error(`Échec de la récupération du contenu pour ${diseaseType}`);
    }
  },

  // === NOTIFICATIONS ===
// healthService.js
getUserNotifications: async () => { // Ne prenez plus userId en paramètre
  try {
    console.log('[API] Fetching unread notifications');
    const response = await api.get('/notifications/unread');
    
    // Debug complet
    console.log('[API] Response:', {
      status: response.status,
      data: response.data,
      headers: response.headers
    });

    // Normalisation
    return (response.data || []).map(notif => ({
      id: notif.id,
      message: notif.message || 'Nouvelle notification',
      type: String(notif.type || 'general').toLowerCase(),
      date: notif.date ? new Date(notif.date) : new Date(),
      read: Boolean(notif.read)
    }));
    
  } catch (error) {
    console.error('[API] Full error:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });
    throw error;
  }
},
  markNotificationAsRead: async (notificationId) => {
    try {
      await api.put(`/notifications/${notificationId}/read`);
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw new Error('Échec de la mise à jour de la notification');
    }
  },
    getUnreadNotificationsCount: async (userId = getUserId()) => {
    try {
      const response = await api.get(`/notifications/user/${userId}/unread-count`);
      return response.data;
    } catch (error) {
      console.error('Error fetching unread notifications count:', error);
      throw new Error('Échec de la récupération du nombre de notifications non lues');
    }
  },

  getUnreadNotifications: async (userId = getUserId()) => {
    try {
      const response = await api.get(`/notifications/user/${userId}?unreadOnly=true`);
      return response.data;
    } catch (error) {
      console.error('Error fetching unread notifications:', error);
      throw new Error('Échec de la récupération des notifications non lues');
    }
  },

  createNotification: async (notificationData) => {
    try {
      const response = await api.post('/notifications', notificationData);
      return response.data;
    } catch (error) {
      console.error('Error creating notification:', error);
      throw new Error(error.response?.data?.message || 'Échec de la création de la notification');
    }
  },



  // === AUTRES ===
  getPatientConditions: async (userId = getUserId()) => {
    try {
      const response = await api.get(`/user/conditions/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching patient conditions:', error);
      return ['diabete']; // Fallback pour le développement
    }
  }

};
export default healthService;