import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const NotificationItem = ({ notification, onMarkAsRead }) => {
  const getIcon = () => {
    switch(notification.type) {
      case 'medication_reminder':
        return '💊';
      case 'appointment_reminder':
        return '📅';
      case 'health_tip':
        return '💡';
      default:
        return '🔔';
    }
  };

  const getTypeLabel = () => {
    switch(notification.type) {
      case 'medication_reminder':
        return 'Médicament';
      case 'appointment_reminder':
        return 'Rendez-vous';
      case 'health_tip':
        return 'Conseil santé';
      default:
        return 'Notification';
    }
  };

  return (
    <div className={`notification-item ${notification.read ? 'read' : 'unread'}`}>
      <div className="notification-icon">{getIcon()}</div>
      
      <div className="notification-content">
        <div className="notification-header">
          <span className="notification-type">{getTypeLabel()}</span>
          <span className="notification-date">
            {format(new Date(notification.date), 'PPpp', { locale: fr })}
          </span>
        </div>
        <p className="notification-message">{notification.message}</p>
      </div>
      
      {!notification.read && (
        <button 
          onClick={() => onMarkAsRead(notification.id)}
          className="mark-read-btn"
          aria-label="Marquer comme lu"
        >
          ✓
        </button>
      )}
    </div>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
      'medication_reminder',
      'appointment_reminder', 
      'health_tip',
      'general'
    ]).isRequired,
    date: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired,
  onMarkAsRead: PropTypes.func.isRequired
};

export default NotificationItem;