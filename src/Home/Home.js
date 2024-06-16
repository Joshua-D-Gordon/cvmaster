// src/Home.js
import React from 'react';
import './styles.css';

const Home = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">CV Master</div>
        <nav className="nav">
          <button className="nav-button">Find a New Job</button>
          <button className="nav-button">Excel at Your Job</button>
          <button className="nav-button">Change Career</button>
        </nav>
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
            <div className="document">
              <img src="https://picsum.photos/100/140" alt="Document" />
              <div className="document-info">
                <h3>Copy of Mixed Joshua Gordon</h3>
                <span>Updated 9 June, 15:35</span>
                <div className="document-actions">
                  <button>Tailor to job listing</button>
                  <button>Share a link</button>
                  <button>Download PDF</button>
                  <button>Export to DOCX</button>
                </div>
              </div>
            </div>
            <div className="document">
              <img src="https://picsum.photos/100/140" alt="Document" />
              <div className="document-info">
                <h3>Digital marketing analyst Joshua Gordon</h3>
                <span>Updated 29 May, 15:37</span>
                <div className="document-actions">
                  <button>Tailor to job listing</button>
                  <button>Share a link</button>
                  <button>Download PDF</button>
                  <button>Export to DOCX</button>
                </div>
              </div>
            </div>
          </div>
          <button className="load-more">Show 28 more resumes</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
