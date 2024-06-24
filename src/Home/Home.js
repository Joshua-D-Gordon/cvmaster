// src/Home.js
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { ref, get } from "firebase/database";
import Sidebar from '../Sidebar/Sidebar';
import './styles.css';

const Home = () => {
  const [user, setUser] = useState(null);
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        await fetchUserCvs(user.uid);
      } else {
        window.location.href = "/login";
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserCvs = async (uid) => {
    const userRef = ref(db, `users/${uid}/cvs`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      const cvsData = snapshot.val();
      const cvsList = cvsData ? Object.values(cvsData) : [];
      setCvs(cvsList);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="content">
        <header className="header">
          <div className="profile">
            <div className="profile-pic"></div>
            <span>Career Profile 90%</span>
          </div>
        </header>
        <section className="hero">
          <div className="hero-content">
            <h1>Find Your Next Job</h1>
            <p>Find your ideal job among thousands of recommended positions from hundreds of companies and add them to Job Tracker to track the status of each.</p>
          </div>
        </section>
        <div className="container">
          <div className="services">
            <div className="service">Documents</div>
            <div className="service">Job Search</div>
            <div className="service">Interview Prep</div>
            <div className="service">Job Search Strategy</div>
            <div className="service">Job Tracker</div>
            <div className="service">Career Insights</div>
          </div>
          <div className="documents">
            <h2>Documents</h2>
            <div className="tabs">
              <button className="tab-button active">Resumes</button>
              <button className="tab-button">Cover Letters</button>
            </div>
            <div className="document-list">
              {cvs.length > 0 ? (
                cvs.map((cv, index) => (
                  <div className="document" key={index}>
                    <img src="https://picsum.photos/100/140" alt="Document" />
                    <div className="document-info">
                      <h3>{cv.title}</h3>
                      <span>{cv.lastUpdated}</span>
                      <div className="document-actions">
                        <button>Tailor to job listing</button>
                        <button>Share a link</button>
                        <button>Download PDF</button>
                        <button>Export to DOCX</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No CVs available.</p>
              )}
            </div>
            <button className="load-more">Show 28 more resumes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
