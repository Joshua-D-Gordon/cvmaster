// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Cvs from './Cvs/Cvs';
import JobTracker from './Jobtracker/Jobtracker';
import CareerInsights from './Careerinsights/Careerinsights';
import Profile from './Profile/Profile';
import Pricing from './Pricing/Pricing';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={currentUser ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={currentUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/cvs" element={currentUser ? <Cvs /> : <Navigate to="/login" />} />
        <Route path="/job-tracker" element={currentUser ? <JobTracker /> : <Navigate to="/login" />} />
        <Route path="/career-insights" element={currentUser ? <CareerInsights /> : <Navigate to="/login" />} />
        <Route path="/profile" element={currentUser ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/pricing" element={currentUser ? <Pricing /> : <Navigate to="/pricing" />} />
        <Route path="*" element={<Navigate to={currentUser ? "/home" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
