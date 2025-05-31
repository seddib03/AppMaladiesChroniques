import React, { useEffect, useState } from 'react';
import { getReminders } from '../api/reminders';
import ReminderAlert from '../components/reminders/ReminderAlert';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    getReminders().then(setReminders);
  }, []);

  return (
    <div className="p-4">
      <h1>Mes rappels</h1>
      {reminders.map((r, idx) => <ReminderAlert key={idx} reminder={r} />)}
    </div>
  );
};
export default Reminders;