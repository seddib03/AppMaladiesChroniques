import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const RegisterForm = ({ onRegister }) => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    age: '',
    gender: '',
    diseaseType: '',
    medicalHistory: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onRegister({
        ...userData,
        age: parseInt(userData.age), // S'assurer que `age` est bien un nombre
      });
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
        <label className="block text-gray-700">Age</label>
        <input type="number" name="age" onChange={handleChange} className="w-full p-2 border rounded" required />
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
        <label className="block text-gray-700">Disease Type</label>
        <input type="text" name="diseaseType" onChange={handleChange} className="w-full p-2 border rounded" required />
      </div>

      <div>
        <label className="block text-gray-700">Medical History</label>
        <textarea name="medicalHistory" onChange={handleChange} className="w-full p-2 border rounded" rows={4} required />
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
