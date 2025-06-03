import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin({ username, password });
    } catch (err) {
      setError('Identifiants incorrects');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold text-center">Connexion</h2>

      <div>
        <label className="block text-gray-700">Nom d'utilisateur</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-gray-700">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <Button type="submit">Se connecter</Button>

      <p className="text-sm mt-4 text-center">
        Vous n’avez pas de compte ?{' '}
        <Link to="/register" className="text-blue-500 hover:underline">
          Inscrivez-vous ici
        </Link>
      </p>
    </form>
  );
};

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
