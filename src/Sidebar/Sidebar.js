// src/Sidebar.js
import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">CV Master</div>
      <nav className="sidebar-nav">
        <Link to="/home" className="sidebar-nav-item">Home</Link>
        <Link to="/documents" className="sidebar-nav-item">Documents</Link>
        <Link to="/job-search" className="sidebar-nav-item">Job Search</Link>
        <Link to="/interview-prep" className="sidebar-nav-item">Interview Prep</Link>
        <Link to="/job-search-strategy" className="sidebar-nav-item">Job Search Strategy</Link>
        <Link to="/job-tracker" className="sidebar-nav-item">Job Tracker</Link>
        <Link to="/career-insights" className="sidebar-nav-item">Career Insights</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
