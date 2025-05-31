import React, { useState } from 'react';
import Button from '../common/Button';

const ChatbotInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mt-2">
      <input className="flex-1 border p-2" value={text} onChange={(e) => setText(e.target.value)} placeholder="Écrivez un message..." />
      <Button onClick={handleSend}>Envoyer</Button>
    </div>
  );
};
export default ChatbotInput;