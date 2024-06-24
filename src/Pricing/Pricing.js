// src/Pricing/Pricing.js
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './styles.css';

const Pricing = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <h2>Pricing Plans</h2>
        <div className="pricing-container">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p className="price">$9.99 / month</p>
            <ul>
              <li>Access to basic features</li>
              <li>5 CV templates</li>
              <li>Email support</li>
            </ul>
            <button className="choose-plan">Choose Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Pro</h3>
            <p className="price">$19.99 / month</p>
            <ul>
              <li>Access to all features</li>
              <li>20 CV templates</li>
              <li>Priority email support</li>
              <li>Access to job tracker</li>
            </ul>
            <button className="choose-plan">Choose Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">$49.99 / month</p>
            <ul>
              <li>All Pro features</li>
              <li>Unlimited CV templates</li>
              <li>Dedicated account manager</li>
              <li>24/7 phone support</li>
            </ul>
            <button className="choose-plan">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
