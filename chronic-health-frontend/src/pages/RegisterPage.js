import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../assets/components/Common/Auth/RegisterForm';
import authService from '../services/authService';
import './css/RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (userData) => {
    setLoading(true);
    setError('');
    try {
      await authService.register(userData);
      navigate('/login');
    } catch (err) {
      setError('Erreur lors de l\'inscription. Veuillez vérifier vos informations.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <h2 className="register-title">Créer un compte</h2>

      {error && <div className="register-error">{error}</div>}
      {loading && <div className="register-loading">Inscription en cours...</div>}

      <RegisterForm onRegister={handleRegister} disabled={loading} />
    </div>
  );
};

export default RegisterPage;
