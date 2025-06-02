import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from '../assets/components/Common/Auth/LoginForm';
import authService from '../services/authService';
import './css/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (credentials) => {
    try {
      await authService.login(credentials.username, credentials.password);
      navigate('/dashboard');
    } catch (err) {
      setError('Nom d’utilisateur ou mot de passe incorrect.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Connexion</h2>
        {error && <div className="login-error">{error}</div>}
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
