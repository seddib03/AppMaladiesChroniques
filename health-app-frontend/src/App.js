import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HealthDiary from './pages/HealthDiary';
import Reminders from './pages/Reminders';
import Chatbot from './pages/Chatbot';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/diary" element={<HealthDiary />} />
      <Route path="/reminders" element={<Reminders />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  </Router>
);

export default App;