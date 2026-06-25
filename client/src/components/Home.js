import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Briefcase } from 'lucide-react';
import AboutJobs from './AboutJobs';
import ProfileHero from './ProfileHero';
import JobCategories from './JobCategories';
import TechRadar from './TechRadar';

const Home = () => {
  const navigate = useNavigate();
  
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", category, location);
    navigate(`/jobs?category=${category}&location=${location}`);
    
  };

  return (
    <div className="premium-home-wrapper">
      
      {/* SECTION 1: HERO CONTAINER */}
      <section className="jobzilla-hero-section">
        <div className="hero-main-container">
          
          
          <div className="hero-left-content">
            <span className="hero-mini-badge">It's Easy to Find Your</span>
            <h1 className="hero-main-title">
              Dream <span className="pink-text">Job</span>
            </h1>
            <p className="hero-subtitle-text">You dream job is waiting for you.</p>

            
            <form onSubmit={handleSearch} className="jobzilla-filter-box">
              
              
              <div className="filter-field">
                <span className="field-label">CATEGORY</span>
                <div className="input-icon-wrapper">
                  <Briefcase size={18} className="field-icon" />
                  <select 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                    className="filter-select-element"
                  >
                    <option value="">Select Category</option>
                    <option value="DevOps Engineer">Cloud & Infrastructure </option>
                    <option value="UI/UX Designer"> Design & creative </option>
                    <option value="MERN Stack Developer">Software Engineering</option>
                    <option value="Mobile App Developer">Mobile Development</option>
                    <option value="QA Automation Engineer">Quality Assurance</option>
                  </select>
                </div>
              </div>

              <div className="filter-vertical-line"></div>

              
              <div className="filter-field">
                <span className="field-label">LOCATION</span>
                <div className="input-icon-wrapper">
                  <MapPin size={18} className="field-icon" />
                  <select 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                    className="filter-select-element"
                  >
                    <option value="">Select Location</option>
                    <option value="Tunis">Tunis</option>
                    <option value="Sousse">Sousse</option>
                    <option value="Sfax">Sfax</option>
                    <option value="Gabès">Gabès</option>
                    <option value="Béja">Béja</option>
                    <option value="Bizerte">Bizerte</option>
                    <option value="Nabeul">Nabeul</option>
                    <option value="Kairouan">Kairouan</option>
                  </select>
                </div>
              </div>

              
              <button type="submit" className="hero-submit-search-btn">
                Find Jobs
              </button>
            </form>

            
          </div>

          
          <div className="hero-right-image-area">
            <div className="image-uploader-placeholder">
              <div className="placeholder-text-center">
                <img alt="error" className='people'
                 src="https://media.licdn.com/dms/image/v2/D4D12AQGzjqw2k7iOpA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699283992609?e=2147483647&v=beta&t=WN0cq2NNenXXD6GFWiYOaXoI6b14OwudQG2sHkn-Fpw"/>
                
                
              </div>
            </div>
          </div>

        </div>
      </section>
      <AboutJobs/>
      <ProfileHero/>
      <JobCategories/>
      <TechRadar/>
    </div>




  );
};

export default Home;