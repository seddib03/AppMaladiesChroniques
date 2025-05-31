import React from 'react';
const ChatbotWindow = ({ messages }) => (
  <div className="h-64 overflow-y-scroll border p-2">
    {messages.map((msg, i) => (
      <div key={i} className={msg.type === 'user' ? 'text-right' : 'text-left'}>
        <p><strong>{msg.type === 'user' ? 'Vous' : 'Bot'}:</strong> {msg.text}</p>
      </div>
    ))}
  </div>
);
export default ChatbotWindow;