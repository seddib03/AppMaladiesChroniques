export const fetchUser = async () => {
  const res = await fetch('/api/user');
  return res.json();
};
