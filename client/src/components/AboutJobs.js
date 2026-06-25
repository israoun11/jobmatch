import React from 'react';
import '../AboutJobs.css';

const AboutJobs = () => {
  return (
    <div className="about-jobs-container">
      
      <div className="left-content">
        <span className="sub-title">How It Works</span>
        <h1 className="main-title">Follow our<br />steps we will<br />help you.</h1>
        
        <ul className="features-list">
          <li>
            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Trusted & Quality Job
          </li>
          <li>
            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Tunisian Jobs
          </li>
          <li>
            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            No Extra Charge
          </li>
          <li>
            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Top Companies
          </li>
        </ul>
      </div>

      
      <div className="steps-grid">
        
        
        <div className="step-card card-blue">
          <span className="step-number">01</span>
          <div className="card-header">
            <div className="icon-box">
              
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <circle cx="9" cy="9" r="1"></circle>
              </svg>
            </div>
            <div className="card-text">
              <h3>Register<br />Your Account</h3>
              <p>You need to create an account to find the best and preferred job.</p>
            </div>
          </div>
        </div>

        
        <div className="step-card card-brown">
          <span className="step-number">02</span>
          <div className="card-header">
            <div className="icon-box">
              
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <circle cx="11" cy="13" r="3"></circle>
                <line x1="19" y1="19" x2="13.5" y2="13.5"></line>
              </svg>
            </div>
            <div className="card-text">
              <h3>Search<br />Your Job</h3>
              <p>You need to create an account to find the best and preferred job.</p>
            </div>
          </div>
        </div>

        
        <div className="step-card card-purple">
          <span className="step-number">03</span>
          <div className="card-header">
            <div className="icon-box">
             
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="23" y2="8"></line>
                <line x1="20" y1="12" x2="23" y2="12"></line>
              </svg>
            </div>
            <div className="card-text">
              <h3>Apply<br />For Dream Job</h3>
              <p>You need to create an account to find the best and preferred job.</p>
            </div>
          </div>
        </div>

        
        <div className="step-card card-teal">
          <span className="step-number">04</span>
          <div className="card-header">
            <div className="icon-box">
              
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M12 18v-6"></path>
                <path d="M9 15l3-3 3 3"></path>
              </svg>
            </div>
            <div className="card-text">
              <h3>Upload<br />Your Resume</h3>
              <p>You need to create an account to find the best and preferred job.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutJobs;