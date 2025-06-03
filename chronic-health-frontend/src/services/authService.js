import api from './api';

const authService = {
  login: async (username, password) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      const token = response.data.token;

      // Stocker le token dans localStorage
      localStorage.setItem('token', token);

      return response.data;
    } catch (error) {
      // Optionnel : afficher l’erreur ou la relancer
      throw new Error(
        error.response?.data?.message || 'Erreur lors de la connexion'
      );
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || 'Erreur lors de l’inscription'
      );
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },
};

export default authService;
