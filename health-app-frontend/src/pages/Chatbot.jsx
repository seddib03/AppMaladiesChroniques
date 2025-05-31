import React, { useState } from 'react';
import ChatbotWindow from '../components/chatbot/ChatbotWindow';
import ChatbotInput from '../components/chatbot/ChatbotInput';
import { sendMessageToBot } from '../api/chatbot';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    setMessages((prev) => [...prev, { type: 'user', text }]);
    const res = await sendMessageToBot(text);
    setMessages((prev) => [...prev, { type: 'user', text }, { type: 'bot', text: res.reply }]);
  };

  return (
    <div className="p-4">
      <h1>Assistant Virtuel</h1>
      <ChatbotWindow messages={messages} />
      <ChatbotInput onSend={handleSend} />
    </div>
  );
};
export default Chatbot;