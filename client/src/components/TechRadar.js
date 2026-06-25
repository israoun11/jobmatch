import React from 'react';
import '../App.css';

const TechRadar = () => {
  const hotSkills = [
    { name: 'React / Next.js', percentage: 92, color: '#2563eb' },
    { name: 'Node.js & Express', percentage: 85, color: '#10b981' },
    { name: 'Cloud & DevOps', percentage: 78, color: '#06b6d4' },
    { name: 'Python & AI Data', percentage: 65, color: '#8b5cf6' },
  ];

  
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <section className="radar-section">
      <div className="container">
        
        
        <div className="radar-header">
          <span className="radar-badge"> Live Tech Market Insights</span>
          <h2 className="radar-title">Most Demanded Skills This Week</h2>
          <p className="radar-subtitle">We analyze current job offers to show you what companies are hunting for.</p>
        </div>

        
        <div className="circular-cards-grid">
          {hotSkills.map((skill, index) => {
            
            const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

            return (
              <div key={index} className="circle-card">
                
                
                <div className="circle-progress-wrapper">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    
                    <circle
                      className="circle-bg"
                      cx="50"
                      cy="50"
                      r={radius}
                    />
                    
                    <circle
                      className="circle-fill"
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke={skill.color}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                    />
                  </svg>
                  
                  <span className="circle-percentage" style={{ color: skill.color }}>
                    {skill.percentage}%
                  </span>
                </div>

                
                <h3 className="circle-skill-name">{skill.name}</h3>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechRadar;