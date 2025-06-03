import { useEffect, useState } from 'react';
import NotificationItem from '../assets/components/Common/Notification/NotificationItem';
import healthService from '../services/healthService';
import './css/NotificationPage.css';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Récupérez l'ID utilisateur depuis le localStorage
        const userId = localStorage.getItem('userId');
        if (userId) {
          const data = await healthService.getUserNotifications(userId);
          setNotifications(data);
        }
      } catch (err) {
        setError('Erreur lors du chargement des notifications');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
    
    // Polling toutes les 5 minutes
    const interval = setInterval(fetchNotifications, 300000);
    
    return () => clearInterval(interval);
  }, []); // J'ai retiré currentUser des dépendances car il n'est pas défini dans ce scope

  const handleMarkAsRead = async (id) => {
    try {
      await healthService.markNotificationAsRead(id);
      setNotifications(notifications.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      ));
    } catch (err) {
      console.error("Erreur lors du marquage comme lu", err);
    }
  };

  return (
    <div className="notification-page">
      <h1 className="notification-title">Vos Notifications</h1>
      
      {loading && <div className="notification-loading">Chargement...</div>}
      {error && <div className="notification-error">{error}</div>}

      {!loading && !error && notifications.length === 0 && (
        <div className="notification-empty">
          Aucune nouvelle notification
        </div>
      )}

      <div className="notification-list">
        {notifications.map(notification => (
          <NotificationItem 
            key={notification.id} 
            notification={notification} 
            onMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;