import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchOffres } from '../JS/offreSlice';
import axios from 'axios';
import '../Style.css'; 

const Jobs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationRoute = useLocation();

  const { offresList, loading, error } = useSelector((state) => state.offre);
  const [visibleCount, setVisibleCount] = useState(6);

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    description: '',
    experience: '',
    localisation: '',
    type: 'on-site',
    typeContrat: 'CDI',
    remuneration: '',
    duree: '',
    category: 'IT',
    skills: ''
  });

  const searchParams = new URLSearchParams(locationRoute.search);
  const categoryParam = searchParams.get('category') || '';
  const locationParam = searchParams.get('location') || '';

  useEffect(() => {
    dispatch(fetchOffres());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(6);
  }, [categoryParam, locationParam]);

  const filteredOffres = offresList.filter((offre) => {
    const matchCategory = categoryParam
      ? offre.category?.toLowerCase().includes(categoryParam.toLowerCase()) ||
        offre.name?.toLowerCase().includes(categoryParam.toLowerCase())
      : true;
    const matchLocation = locationParam
      ? offre.localisation?.toLowerCase().includes(locationParam.toLowerCase())
      : true;
    return matchCategory && matchLocation;
  });

  const offresToShow = filteredOffres.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const formattedData = {
        ...formData,
        skills: formData.skills.split(',').map(s => s.trim())
      };

      
      const response = await axios.post('https://jobmatch-tau.vercel.app/offre/add', formattedData);

      if (response.status === 201 || response.status === 200) {
        alert('Job Offer added successfully to Database!');
        setIsModalOpen(false); 
        dispatch(fetchOffres()); 
        
        setFormData({ name: '', company: '', description: '', experience: '', localisation: '', type: 'on-site', typeContrat: 'CDI', remuneration: '', duree: '', category: 'IT', skills: '' });
      }
    } catch (err) {
      console.error(err);
      alert('Failed to add job offer. Check backend route URL!');
    }
  };

  return (
    <div className="jobs-page-container">
      <div className="container">
        
        
        <div className="add-job-header-row" style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 0' }}>
          <button className="btn-post-job-trigger"
            style={{ backgroundColor:'#ff8fa3'}}
             onClick={() => setIsModalOpen(true)}>
              + Post a New Job
          </button>
        </div>

        <div className="jobs-header">
          <h2>Explore Available Jobs</h2>
          {(categoryParam || locationParam) && (
            <p className="filter-badge">
              Showing results for: <span>{categoryParam || locationParam}</span>
            </p>
          )}
        </div>

        {loading && <div className="loading-spinner">Loading jobs...</div>}
        {error && <div className="error-message">❌ Error: {error}</div>}

        {!loading && !error && (
          <div className="jobs-grid-modern">
            {offresToShow.length > 0 ? (
              offresToShow.map((offre) => (
                <div key={offre._id} className="job-card-modern">
                  <div className="card-top-row">
                    <div className="company-logo-box">
                      {offre.company ? offre.company.substring(0, 4).toUpperCase() : 'JOB'}
                    </div>
                    <span className={`job-type-tag ${offre.typeContrat?.toLowerCase() === 'internship' ? 'intern' : ''}`}>
                      {offre.typeContrat || 'Full Time'}
                    </span>
                  </div>

                  <div className="card-main-info">
                    <h3 className="job-title-modern">{offre.name}</h3>
                    <p className="company-name-modern">{offre.company || 'Synchron Infotech'}</p>
                    {offre.website && (
                      <a href={offre.website} target="_blank" rel="noreferrer" className="company-link">
                        {offre.website}
                      </a>
                    )}
                  </div>

                  <div className="card-meta-info">
                    <p className="location-text-modern">📍 {offre.localisation}</p>
                  </div>

                  <div className="card-footer-modern">
                    <span className="salary-text-modern">{offre.remuneration || '$200 - $500 / MONTH'}</span>
                    <button className="btn-browse-job" onClick={() => navigate('/job/'+ offre._id)}>
                      Browse Job
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-jobs-found">
                <p>No jobs match your current search.</p>
              </div>
            )}
          </div>
        )}

        {filteredOffres.length > visibleCount && (
          <div className="load-more-container">
            <button className="btn-load-more-modern" onClick={handleLoadMore}>
              Load more listings
            </button>
          </div>
        )}
      </div>

      
      {isModalOpen && (
        <div className="custom-job-modal-overlay">
          <div className="custom-job-modal-content">
            <div className="modal-header-row">
              <h3>Create a New Job Offer</h3>
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
            </div>
            <form onSubmit={handleFormSubmit} className="modal-job-form">
              <div className="form-group-row">
                <input type="text" name="name" placeholder="Job Title (e.g. Node.js Developer)" value={formData.name} onChange={handleInputChange} required />
                <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} required />
              </div>
              <div className="form-group-row">
                <input type="text" name="localisation" placeholder="Location (e.g. Tunis, Tunisia)" value={formData.localisation} onChange={handleInputChange} required />
                <input type="text" name="remuneration" placeholder="Salary (e.g. 1500 DT)" value={formData.remuneration} onChange={handleInputChange} required />
              </div>
              <div className="form-group-row">
                <input type="text" name="experience" placeholder="Required Experience (e.g. 1-2 years)" value={formData.experience} onChange={handleInputChange} required />
                <input type="text" name="duree" placeholder="Duration (e.g. Indefinite / 6 months)" value={formData.duree} onChange={handleInputChange} required />
              </div>
              <div className="form-group-row">
                <select name="type" value={formData.type} onChange={handleInputChange}>
                  <option value="on-site">On-site</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
                <select name="typeContrat" value={formData.typeContrat} onChange={handleInputChange}>
                  <option value="CDI">CDI</option>
                  <option value="CDD">CDD</option>
                  <option value="PFE Internship">PFE Internship</option>
                </select>
              </div>
              <div className="form-group-row">
                <input type="text" name="category" placeholder="Category (e.g. IT / Marketing)" value={formData.category} onChange={handleInputChange} required />
                <input type="text" name="skills" placeholder="Skills (comma separated: React, Node, SQL)" value={formData.skills} onChange={handleInputChange} required />
              </div>
              <textarea name="description" placeholder="Job Description" rows="4" value={formData.description} onChange={handleInputChange} required></textarea>
              <button type="submit" className="submit-job-btn">Publish Offer</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;