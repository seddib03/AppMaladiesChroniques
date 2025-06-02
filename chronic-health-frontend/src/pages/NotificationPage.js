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
        const data = await healthService.getNotifications();
        setNotifications(data);
      } catch (err) {
        setError('Erreur lors du chargement des notifications.');
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div className="notification-page">
      <h1 className="notification-title">Notifications</h1>

      {loading && <div className="notification-loading">Chargement en cours...</div>}
      {error && <div className="notification-error">{error}</div>}

      {!loading && !error && notifications.length === 0 && (
        <div className="notification-empty">Aucune notification pour le moment.</div>
      )}

      <ul className="notification-list">
        {notifications.map(notif => (
          <NotificationItem key={notif.id} notification={notif} />
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
