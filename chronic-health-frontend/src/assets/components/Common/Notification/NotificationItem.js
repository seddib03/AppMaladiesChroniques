import PropTypes from 'prop-types';

const NotificationItem = ({ notification }) => {
  return (
    <li className={`mb-2 p-2 rounded ${notification.read ? 'bg-gray-200' : 'bg-blue-100'}`}>
      {notification.content} ({notification.type}) - {notification.date}
    </li>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.string,
    read: PropTypes.bool,
  }).isRequired,
};

export default NotificationItem;