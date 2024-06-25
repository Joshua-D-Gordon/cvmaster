// src/Sidebar/Sidebar.js
import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { ref, get } from 'firebase/database';
import { signOut } from 'firebase/auth';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [profileData, setProfileData] = useState({ cvsCount: 0, jobsCount: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = ref(db, `users/${user.uid}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setProfileData({
            cvsCount: data.cvs ? Object.keys(data.cvs).length : 0,
            jobsCount: data.jobTracker ? Object.keys(data.jobTracker).length : 0,
          });
        }
      }
    };
    fetchProfileData();
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
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
          <div className="cv-amount"># of CV's: {profileData.cvsCount}</div>
          <div className="jobs-amount"># of jobs applied: {profileData.jobsCount}</div>
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
        <Link to="/cvbuilder" className="sidebar-nav-item">
          <i className="fas "></i>
          <span className="sidebar-nav-text">cv builder</span>
        </Link>
        
        <Link to="/logout" onClick={handleLogout} className="sidebar-nav-item lo">
          <i className="fas fa-sign-out-alt"></i>
          <span className="sidebar-nav-text">Log Out</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
