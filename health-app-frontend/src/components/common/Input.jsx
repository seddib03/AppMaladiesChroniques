import React from 'react';
const Input = ({ value, onChange, placeholder, type = 'text' }) => (
  <input
    className="border p-2 w-full"
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
export default Input;