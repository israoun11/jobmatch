import React from 'react';
import '../Annonce.css';

function CandidateDetails({ annonce, onClose, getAvatarClass }) {
  const firstLetter = annonce.nameuser ? annonce.nameuser.charAt(0).toUpperCase() : 'U';

  return (
    <div className="details-overlay">
      <div className="details-card">
        
        <div className="details-header-content">
          <div className={`candidate-avatar large ${getAvatarClass(firstLetter)}`}>
            {firstLetter}
          </div>
          <h2 className="details-name">{annonce.nameuser}</h2>
          <span className="details-job-title">{annonce.title}</span>
        </div>

        <div className="details-body">
          <div className="info-section">
            <span className="section-label">Full Description</span>
            <p className="description-text">{annonce.description}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-item pink-box">
              <span className="contact-label">Phone Number</span>
              <p className="contact-value">{annonce.phone}</p>
            </div>
            <div className="contact-item purple-box">
              <span className="contact-label">Email Address</span>
              <p className="contact-value">{annonce.email}</p>
            </div>
          </div>
        </div>

        <div className="details-footer">
          <button className="close-btn" onClick={onClose}>Close Profile</button>
        </div>

      </div>
    </div>
  );
}

export default CandidateDetails;