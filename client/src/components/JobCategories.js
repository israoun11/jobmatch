
import '../App.css';
import React, { useRef } from 'react';


const JobCategories = () => {
  
  const sliderRef = useRef(null);

  const categories = [
    { id: 1, title: 'Software Development', jobs: '22 Jobs Available', iconColor: '#2563eb' },
    { id: 2, title: 'Web & UI/UX Design', jobs: '15 Jobs Available', iconColor: '#3b82f6' },
    { id: 3, title: 'DevOps & Cloud Engineering', jobs: '8 Jobs Available', iconColor: '#06b6d4' },
    { id: 4, title: 'Cyber Security', jobs: '5 Jobs Available', iconColor: '#ef4444' },
    { id: 5, title: 'Data Science & Analytics', jobs: '12 Jobs Available', iconColor: '#8b5cf6' },
    { id: 6, title: 'Artificial Intelligence (AI)', jobs: '9 Jobs Available', iconColor: '#6366f1' },
    { id: 7, title: 'Mobile App Development', jobs: '18 Jobs Available', iconColor: '#10b981' },
    { id: 8, title: 'QA & Software Testing', jobs: '7 Jobs Available', iconColor: '#f59e0b' },
    { id: 9, title: 'Database Administration', jobs: '6 Jobs Available', iconColor: '#14b8a6' },
    { id: 10, title: 'Digital Marketing & SEO', jobs: '10 Jobs Available', iconColor: '#f97316' },
    { id: 11, title: 'IT Support & Networking', jobs: '11 Jobs Available', iconColor: '#64748b' },
  ];

  
  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 320; 
      if (direction === 'left') {
        sliderRef.current.scrollLeft -= scrollAmount;
      } else {
        sliderRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section className="categories-section">
      <div className="container">
        
        <div className="categories-header">
          <span className="cat-subtitle">Browse By Category</span>
          <h2 className="cat-title">Find the job that's perfect for you.</h2>
        </div>

        <div className="slider-wrapper">
          
          
          <button className="slider-arrow arrow-left" onClick={() => handleScroll('left')}>
            <i className="fas fa-chevron-left"></i>
          </button>

          
          <div className="categories-slider-container" ref={sliderRef}>
            <div className="categories-grid">
              {categories.map((cat) => (
                <div key={cat.id} className="category-card">
                  <div className="icon-shape" style={{ '--icon-bg': cat.iconColor }}></div>
                  <div className="card-text">
                    <h3>{cat.title}</h3>
                    <p>{cat.jobs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <button className="slider-arrow arrow-right" onClick={() => handleScroll('right')}>
            <i className="fas fa-chevron-right"></i>
          </button>

        </div>

      </div>
    </section>
  );
};

export default JobCategories;
