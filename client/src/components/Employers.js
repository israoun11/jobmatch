import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Style.css';


const Icons = {
  briefcase: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  users: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  clock: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
  checkCircle: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
  graduation: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>,
  mapPin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  phone: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  envelope: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  star: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  close: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
};

const Employers = () => {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  
  const [formData, setFormData] = useState({
    nameuser: '',
    emailuser: '',
    phoneuser: '',
    address: '',
    nivEtude: '',
    skills: '',
    experience: '',
    status: 'en cours'
  });

  const navigate = useNavigate();

 
  const fetchDemandes = () => {
    axios.get('http://localhost:5000/demande/all')
      .then(res => {
        setDemandes(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDemandes();
  }, []);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    
    const processedData = {
      ...formData,
      offreId: "666be330d9595bf61e89abcd", 
      applicantId: "65ddd987a1b2c34d56789012", 
      skills: formData.skills.split(',').map(s => s.trim()).filter(s => s !== ""),
      dateDemande: new Date().toISOString()
    };

    axios.post('http://localhost:5000/demande/apply', processedData)
      .then(res => {
        console.log("Candidate added successfully via Modal:", res.data);
        setIsModalOpen(false); 
        fetchDemandes(); 
        
        setFormData({
          nameuser: '', emailuser: '', phoneuser: '', address: '',
          nivEtude: '', skills: '', experience: '', status: 'en cours'
        });
      })
      .catch(err => {
        console.error("Error creating candidate:", err);
        alert("Failed to add candidate. Please check Backend!");
      });
  };

  const totalApps = demandes.length;
  const pendingApps = demandes.filter(d => d.status === 'en cours').length;
  const acceptedApps = demandes.filter(d => d.status === 'accepted' || d.status === 'accepté').length;

  const avatarColors = [ "#ec4899", "#3b82f6","#a855f7", "#6366f1", "#f43f5e"
  ];

  if (loading) {
    return (
      <div className="pro-loader">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
        <p>Loading Dashboard Analytics...</p>
      </div>
    );
  }

  return (
    <div className="jobigo-wrapper">
      <div className="jobigo-container">
        
        {/* Top Banner */}
        <div className="welcome-banner">
          <div className="welcome-text">
            <h2>Welcome back, Partner!</h2>
            <p>Here’s an overview of your recruitment pipeline and active talent search.</p>
          </div>
          <button className="post-job-btn" onClick={() => setIsModalOpen(true)}>
            Add New Candidate
          </button>
        </div>

        {/* Stats Section */}
        <div className="jobigo-stats-grid">
          <div className="jobigo-card stat-blue">
            <div className="icon-box">{Icons.briefcase}</div>
            <div className="info-box">
              <h3 className='number1'>{totalApps}</h3>
              <p>Total Received</p>
            </div>
          </div>
          <div className="jobigo-card stat-orange">
            <div className="icon-box">{Icons.clock}</div>
            <div className="info-box">
              <h3 className='number2'>{pendingApps}</h3>
              <p>Pending Screening</p>
            </div>
          </div>
          <div className="jobigo-card stat-green">
            <div className="icon-box">{Icons.checkCircle}</div>
            <div className="info-box">
              <h3 className='number3'>{acceptedApps} </h3>
              <p>Shortlisted Talents</p>
            </div>
          </div>
        </div>

        <div className="section-title-area">
          <h3>Suggested Job Seekers</h3>
        </div>

        {/* Grid Area */}
        <div className="candidates-grid">
          {demandes.map((demande, index) => {
            const userColor = avatarColors[index % avatarColors.length];
            return (
              <div 
                key={demande._id} 
                className="candidate-pro-card"
                onClick={() => {
                    const userColor = avatarColors[index % avatarColors.length];
                    navigate('/employer/candidate/' + demande._id, { state: { demande, avatarColors: userColor } });
                }}
              >
                <div className="pro-tooltip">
                  <h4>Quick Snapshot</h4>
                  <p>{Icons.envelope} {demande.emailuser || "N/A"}</p>
                  <p>{Icons.phone} {demande.phoneuser || "N/A"}</p>
                  <p>{Icons.mapPin} {demande.address || "N/A"}</p>
                  <div className="tooltip-skills">
                    {demande.skills && demande.skills.map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </div>

                <div className="card-top-row">
                  <span className={`pro-status-badge ${demande.status === 'accepted' || demande.status === 'accepté' ? 'badge-ok' : demande.status === 'rejected' || demande.status === 'refusé' ? 'badge-no' : 'badge-wait'}`}>
                    {demande.status || "en cours"}
                  </span>
                  <span className="star-fav-wrapper">{Icons.star}</span>
                </div>

                <div className="candidate-core">
                  {(() =>{
                    const userColor = avatarColors[index % avatarColors.length];
                    const firstLetter = demande.nameuser ? demande.nameuser.charAt(0).toUpperCase() : 'A';
                    return (
                        <div className="pro-avatar-circle" style={{ backgroundColor: userColor}}>
                            {firstLetter}
                        </div>
                    );
                  })()}
                  <h4>{demande.nameuser || "Anonymous"}</h4>
                  <p className="pro-title-sub">{Icons.graduation} {demande.nivEtude || "N/A"}</p>
                </div>

                <div className="card-experience-box">
                  <p>{demande.experience || "No specific experience detailed yet."}</p>
                </div>

                <div className="card-action-footer">
                  <span className="click-indicator">Click to view full profile</span>
                </div>
              </div>
            );
          })}
        </div>

        
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content-box animate-modal">
              <div className="modal-header">
                <h3>Create Candidate Profile</h3>
                <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                  {Icons.close}
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="modal-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="nameuser" value={formData.nameuser} onChange={handleInputChange} required placeholder="e.g. Elyes Ben Amor" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="emailuser" value={formData.emailuser} onChange={handleInputChange} required placeholder="name@company.com" />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" name="phoneuser" value={formData.phoneuser} onChange={handleInputChange} required placeholder="+216 99 888 777" />
                  </div>
                  <div className="form-group">
                    <label>Location / Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} required placeholder="e.g. Ariana, Tunisia" />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Education Level</label>
                    <input type="text" name="nivEtude" value={formData.nivEtude} onChange={handleInputChange} required placeholder="e.g. Engineering Degree in IT" />
                  </div>
                  <div className="form-group">
                    <label>Initial Status</label>
                    <select name="status" value={formData.status} onChange={handleInputChange}>
                      <option value="en cours">en cours</option>
                      <option value="accepted">accepted</option>
                      <option value="rejected">rejected</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Technical Skills <span className="label-hint">(Separate with commas)</span></label>
                  <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} required placeholder="React, Node.js, MongoDB, Docker" />
                </div>

                <div className="form-group">
                  <label>Professional Experience Description</label>
                  <textarea name="experience" value={formData.experience} onChange={handleInputChange} required rows="3" placeholder="Describe core background and past roles..."></textarea>
                </div>

                <div className="modal-actions-footer">
                  <button type="button" className="modal-cancel-btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                  <button type="submit" className="modal-submit-btn">Save & Create Card</button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Employers;