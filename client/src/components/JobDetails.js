import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../Job.css';

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isApplied, setIsApplied] = useState(false);

    
    const { offresList } = useSelector((state) => state.offre);

    useEffect(() => {
        const foundJob = offresList?.find((item) => item._id === id);
        
        if (foundJob) {
            setJob(foundJob);
            setLoading(false);
        } else {
            
            axios.get('http://localhost:5000/offre/${id}')
                .then((res) => {
                    setJob(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Could not load job details. Please try again.");
                    setLoading(false);
                });
        }
    }, [id, offresList]);

    
    const handleApply = () => {
        alert('Successfully applied');
        setIsApplied(true);
    };

    if (loading) {
        return (
            <div className="job-details-loading">
                <div className="spinner"></div>
                <p>Loading job details...</p>
            </div>
        );
    }

    if (error || !job) {
        return (
            <div className="job-details-error">
                <p>{error || "Job not found."}</p>
                <button onClick={() => navigate(-1)} className="btn-back">Go Back</button>
            </div>
        );
    }

    return (
        <div className="job-details-container">
            
            <button onClick={() => navigate(-1)} className="btn-back-nav">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Jobs
            </button>

            <div className="job-details-main-card">
                
                <div className="job-details-header">
                    <div className="company-logo-large">
                        {job.company ? job.company.substring(0, 4).toUpperCase() : 'JOB'}
                    </div>
                    <div className="header-text-content">
                        <h2>{job.name}</h2>
                        <div className="header-meta-info">
                            <span className="company-name-tag">{job.company}</span>
                            <span className="info-tag-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                {job.localisation}
                            </span>
                            <span className="info-tag-badge type-badge">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                {job.typeContrat || 'CDI'} ({job.type})
                            </span>
                        </div>
                    </div>
                    
                    
                    <div className="header-action-button">
                        <button 
                            className={`btn-apply-now ${isApplied ? 'applied' : ''}`} 
                            onClick={handleApply}
                            disabled={isApplied}
                        >
                            {isApplied ? (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: 'middle'}}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Applied
                                </>
                            ) : (
                                'Apply For Job'
                            )}
                        </button>
                    </div>
                </div>

                <hr className="divider" />

                
                <div className="job-quick-specs-grid">
                    <div className="spec-item">
                        <span className="spec-label">Experience</span>
                        <span className="spec-value">{job.experience || 'Not Specified'}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Salary / Remuneration</span>
                        <span className="spec-value highlight-salary">{job.remuneration || 'Negotiable'}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Duration</span>
                        <span className="spec-value">{job.duree || 'Permanent'}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Category</span>
                        <span className="spec-value">{job.category || 'IT'}</span>
                    </div>
                </div>

                
                <div className="job-details-body">
                    <div className="body-section">
                        <h3>Job Description</h3>
                        <p className="description-text">{job.description}</p>
                    </div>

                    <div className="body-section">
                        <h3>Required Skills</h3>
                        <div className="skills-tags-container">
                            {Array.isArray(job.skills) ? (
                                job.skills.map((skill, index) => (
                                    <span key={index} className="skill-badge-item">{skill}</span>
                                ))
                            ) : (
                                job.skills && job.skills.split(',').map((skill, index) => (
                                    <span key={index} className="skill-badge-item">{skill.trim()}</span>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;