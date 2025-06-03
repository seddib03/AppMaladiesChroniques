import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaPills, FaCalendarCheck } from 'react-icons/fa';
import { FaCalendarAlt, FaLightbulb } from 'react-icons/fa';
import { FaHome, FaUser, FaCog, FaRobot } from 'react-icons/fa';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Chronic Health</h2>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className="nav-item">
          <FaTachometerAlt className="nav-icon" /> Tableau de bord
        </NavLink>
        <NavLink to="/medications" className="nav-item">
          <FaPills className="nav-icon" /> Médicaments
        </NavLink>
        <NavLink to="/appointments" className="nav-item">
          <FaCalendarCheck className="nav-icon" /> Rendez-vous
        </NavLink>
        <NavLink to="/health-diary" className="nav-item">
            <FaCalendarAlt className="nav-icon" /> Journal de santé
        </NavLink>
        <NavLink to="/recommendations" className="nav-item">
            <FaLightbulb className="nav-icon" /> Recommandations
        </NavLink>
        <NavLink to="/ai-medical-advice" className="nav-item">
          <FaRobot className="nav-icon" /> Assistant IA
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;
