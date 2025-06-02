import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const RegisterForm = ({ onRegister }) => {
  const [userData, setUserData] = useState({
    username: '', password: '', name: '', surname: '', birthDate: '', gender: '', email: '', disease: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onRegister(userData);
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Username</label>
        <input type="text" name="username" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block text-gray-700">Password</label>
        <input type="password" name="password" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block text-gray-700">Name</label>
        <input type="text" name="name" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block text-gray-700">Surname</label>
        <input type="text" name="surname" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block text-gray-700">Birth Date</label>
        <input type="date" name="birthDate" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block text-gray-700">Gender</label>
        <select name="gender" onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input type="email" name="email" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label className="block text-gray-700">Disease</label>
        <input type="text" name="disease" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit">Register</Button>
    </form>
  );
};

RegisterForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterForm;