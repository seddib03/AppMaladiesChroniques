import React from 'react';
const AiMessage = ({ message }) => (
  <div className="bg-red-100 p-4 rounded text-red-700">
    ⚠️ {message}
  </div>
);
export default AiMessage;