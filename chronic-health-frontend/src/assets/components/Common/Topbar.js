import './Topbar.css';
import { useNavigate } from 'react-router-dom';

const Topbar = ({ userName = 'Patient' }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Vous pouvez ajouter la suppression du token ici
    navigate('/login');
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        👋 Bonjour, <span className="username">{userName}</span>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Déconnexion
      </button>
    </header>
  );
};

export default Topbar;
