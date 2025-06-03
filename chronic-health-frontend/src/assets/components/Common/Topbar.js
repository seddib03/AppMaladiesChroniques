import './Topbar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Topbar = ({ userName = 'Patient' }) => {
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0); // État pour le nombre de notifications non lues

  const handleLogout = () => {
    // Suppression du token et redirection
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const goToNotifications = () => {
    // Redirection vers la page des notifications
    navigate('/notifications');
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        👋 Bonjour, <span className="username">{userName}</span>
      </div>
      <div className="topbar-right">
        <div className="notification-icon-container" onClick={goToNotifications}>
          <svg
            className="notification-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          {unreadCount > 0 && (
            <span className="notification-badge">{unreadCount}</span>
          )}
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </header>
  );
};

export default Topbar;