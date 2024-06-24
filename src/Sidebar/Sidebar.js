// src/Sidebar/Sidebar.js
import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-logo">
        {isCollapsed ? "CV" : "CV Master"}
        <button className="toggle-button" onClick={toggleSidebar}>
          <i className={`fas ${isCollapsed ? 'fa-arrow-right' : 'fa-arrow-left'}`}></i>
        </button>
      </div>
      <div className="profile-card">
        <div className="profile-pic"></div>
        <div className="profile-card-data">
          <div className="cv-amount"># of CV's: 10</div>
          <div className="jobs-amount"># of jobs applied: 50</div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <Link to="/home" className="sidebar-nav-item">
          <i className="fas fa-home"></i>
          <span className="sidebar-nav-text">Home</span>
        </Link>
        <Link to="/profile" className="sidebar-nav-item">
          <i className="fas fas fa-user"></i>
          <span className="sidebar-nav-text">Profile</span>
        </Link>
        <Link to="/cvs" className="sidebar-nav-item">
          <i className="fas fa-file-alt"></i>
          <span className="sidebar-nav-text">CV's</span>
        </Link>
        <Link to="/job-tracker" className="sidebar-nav-item">
          <i className="fas fa-briefcase"></i>
          <span className="sidebar-nav-text">Job Tracker</span>
        </Link>
        <Link to="/career-insights" className="sidebar-nav-item">
          <i className="fas fa-chart-line"></i>
          <span className="sidebar-nav-text">Career Insights</span>
        </Link>
        <Link to="/pricing" className="sidebar-nav-item">
          <i className="fas fa-dollar"></i>
          <span className="sidebar-nav-text">Pricing</span>
        </Link>
        
        <Link to="/logout" className="sidebar-nav-item lo">
          <i className="fas fa-sign-out-alt"></i>
          <span className="sidebar-nav-text">Log Out</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
