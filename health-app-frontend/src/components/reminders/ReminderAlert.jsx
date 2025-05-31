import React from 'react';
const ReminderAlert = ({ reminder }) => (
  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
    {reminder.message}
  </div>
);
export default ReminderAlert;