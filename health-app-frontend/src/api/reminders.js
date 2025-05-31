export const getReminders = async () => {
  const res = await fetch('/api/reminders');
  return res.json();
};