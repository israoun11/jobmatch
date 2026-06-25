import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateDetails from './CandidateDetails'; 
import '../Annonce.css';

function CandidatesList() {
  const [annonces, setAnnonces] = useState([]);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  
  const [formData, setFormData] = useState({
    userId: '65ddd987a1b2c34d56789012', 
    nameuser: '',
    phone: '',
    email: '',
    title: '',
    description: ''
  });

  
  useEffect(() => {
    fetchAnnonces();
  }, []);

  const fetchAnnonces = async () => {
    try {
      
      const res = await axios.get('http://localhost:5000/annonce/all');
      setAnnonces(res.data);
    } catch (err) {
      console.error("Error fetching data from server:", err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post('http://localhost:5000/annonce/add', formData);
      setIsCreateOpen(false);
      setFormData({
        userId: '65ddd987a1b2c34d56789012',
        nameuser: '',
        phone: '',
        email: '',
        title: '',
        description: ''
      });
      fetchAnnonces();
    } catch (err) {
      console.error("Error creating annonce:", err);
    }
  };

  const getAvatarClass = (char) => {
    const classes = ['avatar-pink', 'avatar-purple', 'avatar-blue', 'avatar-teal'];
    const index = char ? char.charCodeAt(0) % classes.length : 0;
    return classes[index];
  };

  return (
    <div className="candidates-container">
      <div className="candidates-header">
        
        <button className="add-btn" onClick={() => setIsCreateOpen(true)}>
          <span className="btn-icon">+</span> Add New Announce
        </button>
      </div>

      <div className="candidates-grid">
        {annonces.length > 0 ? (
          annonces.map((annonce) => {
            const firstLetter = annonce.nameuser ? annonce.nameuser.charAt(0).toUpperCase() : 'U';
            return (
              <div key={annonce._id} className="candidate-card">
                <span className="status-badge">en cours</span>
                <div className={`candidate-avatar ${getAvatarClass(firstLetter)}`}>
                  {firstLetter}
                </div>
                
                <h3 className="candidate-name">{annonce.nameuser}</h3>
                <p className="candidate-title">{annonce.title}</p>
                
                <button 
                  className="view-profile-btn"
                  onClick={() => setSelectedAnnonce(annonce)}
                >
                  Click to view full profile
                </button>
              </div>
            );
          })
        ) : (
          <p className="no-data-text">No candidates found in database. Feel free to add one!</p>
        )}
      </div>

      
      {selectedAnnonce && (
        <CandidateDetails 
          annonce={selectedAnnonce} 
          onClose={() => setSelectedAnnonce(null)} 
          getAvatarClass={getAvatarClass}
        />
      )}

      
      {isCreateOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2 className="form-modal-title">Post a New Announce</h2>
            <form onSubmit={handleCreateSubmit} className="annonce-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="nameuser" required value={formData.nameuser} onChange={handleInputChange} placeholder="e.g. Isra Oun" />
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input type="text" name="title" required value={formData.title} onChange={handleInputChange} placeholder="e.g. Développeur Full-Stack" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+216..." />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="name@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" required rows="3" value={formData.description} onChange={handleInputChange} placeholder="Describe the announcement..."></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setIsCreateOpen(false)}>Cancel</button>
                <button type="submit" className="submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CandidatesList;