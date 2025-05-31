export const checkHealthConditions = async (data) => {
  const res = await fetch('/api/ai/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};