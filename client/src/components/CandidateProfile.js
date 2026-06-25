import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Candidate.css'; 


const Icons = {
    briefcase: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
    graduation: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>,
    mapPin: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    envelope: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    phone: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
    arrowLeft: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
    calendar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="31" y2="10"></line></svg>
};

const CandidateProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    
    const { demande, avatarColors } = location.state || {};
    
    const [currentStatus, setCurrentStatus] = useState(demande?.status || 'en cours');
    const [isUpdating, setIsUpdating] = useState(false);

    if (!demande) {
        return (
            <div className="profile-error-container">
                <h2>No candidate data found</h2>
                <button onClick={() => navigate('/employers')} className="back-btn-classic">
                    {Icons.arrowLeft} Back to Dashboard
                </button>
            </div>
        );
    }

    
    const handleStatusUpdate = async (newStatus) => {
        setIsUpdating(true);
        try {
            
            const response = await axios.put(`http://localhost:5000/demande/update-status/${demande._id}`, {
                status: newStatus
            });
            
            if (response.data) {
                setCurrentStatus(newStatus);
            }
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status on the server. Please try again.");
        } finally {
            setIsUpdating(false);
        }
    };

    const firstLetter = demande.nameuser ? demande.nameuser.charAt(0).toUpperCase() : 'A';

    return (
        <div className="profile-page-container">

            <div className="profile-top-navigation">
                <button onClick={() => navigate('/employers')} className="back-btn-classic">
                    {Icons.arrowLeft} Back to Dashboard
                </button>
            </div>

            <div className="profile-sheet-card">
                
                <div className="profile-header-block">
                    <div className="profile-avatar-square" style={{ backgroundColor: avatarColors || '#3b82f6' }}>
                        {firstLetter}
                    </div>
                    <div className="profile-main-meta">
                        <div className="profile-title-row">
                            <h1>{demande.nameuser || "Anonymous"}</h1>
                            <span className={`status-pill ${currentStatus}`}>
                                {currentStatus === 'en cours' ? 'en cours' : currentStatus}
                            </span>
                        </div>
                        
                        <div className="profile-sub-badges">
                            <span className="meta-badge">
                                {Icons.graduation} {demande.nivEtude || "N/A"}
                            </span>
                            <span className="meta-badge">
                                {Icons.mapPin} {demande.address || "N/A"}
                            </span>
                            <span className="meta-badge">
                                {Icons.calendar} Applied on: 14/06/2026
                            </span>
                        </div>
                    </div>
                </div>

                
                <div className="profile-layout-grid">
                    
                    
                    <div className="profile-panel-column">
                        <h2 className="panel-section-title">Contact Information</h2>
                        
                        <div className="data-display-row">
                            <div className="data-icon-wrapper">{Icons.envelope}</div>
                            <div className="data-text-group">
                                <label>Email Address</label>
                                <p>{demande.emailuser || "N/A"}</p>
                            </div>
                        </div>

                        <div className="data-display-row">
                            <div className="data-icon-wrapper">{Icons.phone}</div>
                            <div className="data-text-group">
                                <label>Phone Number</label>
                                <p>{demande.phoneuser || "N/A"}</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="profile-panel-column">
                        <h2 className="panel-section-title">Professional Background</h2>
                        
                        <div className="experience-detail-box">
                            <div className="box-header-title">
                                {Icons.briefcase}
                                <h3>Experience Description</h3>
                            </div>
                            <p className="experience-paragraph">
                                {demande.experience || "No specific experience detailed yet."}
                            </p>
                        </div>

                        <div className="skills-detail-box">
                            <h3>Technical Skills</h3>
                            <div className="skills-flex-container">
                                {demande.skills ? (
                                    typeof demande.skills === 'string' ? (
                                        demande.skills.split(',').map((skill, index) => (
                                            <span key={index} className="pill-skill-tag">{skill.trim()}</span>
                                        ))
                                    ) : Array.isArray(demande.skills) ? (
                                        demande.skills.map((skill, index) => (
                                            <span key={index} className="pill-skill-tag">{skill}</span>
                                        ))
                                    ) : null
                                ) : (
                                    <span className="no-skills-text">No skills listed</span>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

                
                <div className="profile-footer-actions">
                    <button 
                        className="btn-action-outline btn-reject" 
                        disabled={isUpdating || currentStatus === 'rejected'}
                        onClick={() => handleStatusUpdate('rejected')}
                    >
                        Reject Candidate
                    </button>
                    <button 
                        className="btn-action-solid btn-accept" 
                        disabled={isUpdating || currentStatus === 'accepted' || currentStatus === 'accepté'}
                        onClick={() => handleStatusUpdate('accepted')}
                    >
                        Accept Candidate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CandidateProfile;