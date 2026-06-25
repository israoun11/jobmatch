import React, { useState } from 'react';
import '../Career.css';

const CareerTips = () => {
  
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="career-page-wrapper">
      
      {/* 1. Hero Section */}
      <header className="hero">
        <div className="container hero-container">
          <div className="hero-text animate-fade-in">
            
            <h1>Grow Your Career,<br />Shape Your Future</h1>
            <p>Practical tips, expert advice, and resources to help you build the skills, confidence, and mindset needed to achieve your career goals.</p>
            <button className="btn-primary">Start Improving Today</button>
          </div>
          <div className="hero-image animate-float">
            <img src='https://static.vecteezy.com/system/resources/previews/047/633/108/non_2x/realistic-office-moments-illustration-concepts-vector.jpg' width={550}/>
          </div>
        </div>
      </header>

      {/* 2. Top Career Tips Section */}
      <section className="container section-padding">
        <div className="section-title">
          <h2>Top Career Tips</h2>
          <p>Simple steps that can make a big difference in your professional life.</p>
        </div>
        
        <div className="grid-4">
          {/* Card 1 */}
          <div className="card card-hover-effect">
            <div className="icon-box purple-bg">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
            </div>
            <h3>Build a Strong Portfolio</h3>
            <p>Showcase your skills and projects to stand out from the crowd.</p>
          </div>
          {/* Card 2 */}
          <div className="card card-hover-effect">
            <div className="icon-box blue-bg">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h3>Improve Communication</h3>
            <p>Clear communication can open doors and build strong connections.</p>
          </div>
          {/* Card 3 */}
          <div className="card card-hover-effect">
            <div className="icon-box green-bg">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
            </div>
            <h3>Keep Learning</h3>
            <p>Stay updated with new skills and technologies in demand.</p>
          </div>
          {/* Card 4 */}
          <div className="card card-hover-effect">
            <div className="icon-box orange-bg">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3>Network Effectively</h3>
            <p>Connect with professionals and grow your network continuously.</p>
          </div>
        </div>
      </section>

      {/* 3. Featured Article Section (مع الـ Read More المطلوبة) */}
      <section className="container section-padding">
        <div className="featured-card">
          <div className="featured-image-side">
            <div className="laptop-mockup">
              <div className="laptop-screen">
                <span className="screen-brand-text">WORK<br />HARD<br />DREAM<br />BIG</span>
              </div>
            </div>
          </div>
          <div className="featured-content-side">
            <span className="mini-badge">FEATURED ARTICLE</span>
            <h2>How to Stay Motivated in Your Career Journey</h2>
            <p>Motivation comes and goes, but discipline and purpose keep you moving forward. Learn practical strategies to stay focused, overcome challenges, and keep growing every day.</p>
            
            <div className={`expanded-content ${isExpanded ? 'is-visible' : ''}`}>
              <p>Setting micro-goals and tracking your daily velocity prevents burnout. Consistency outpaces raw talent over time; focus on building standard routines that shield your productivity on low-energy days.</p>
            </div>

            <button className="read-more-toggle" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Read Less' : 'Read More'} <span className={`arrow ${isExpanded ? 'up' : ''}`}>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Career Mistakes to Avoid */}
      <section className="container section-padding">
        <div className="section-title">
          <h2>Career Mistakes to Avoid</h2>
          <p>Watch out for these common mistakes that can slow down your progress.</p>
        </div>
        <div className="grid-4 border-top-line">
          <div className="mistake-block">
            <div className="mistake-icon-purple">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <h3>No LinkedIn Profile</h3>
            <p>Not having a professional online presence can cause missed opportunities.</p>
          </div>
          <div className="mistake-block">
            <div className="mistake-icon-purple">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            </div>
            <h3>Weak CV</h3>
            <p>A poorly written CV can prevent you from getting noticed.</p>
          </div>
          <div className="mistake-block">
            <div className="mistake-icon-purple">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <h3>No Projects</h3>
            <p>Practical projects show your skills better than just theory.</p>
          </div>
          <div className="mistake-block">
            <div className="mistake-icon-purple">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </div>
            <h3>Poor Interview Prep</h3>
            <p>Not preparing for interviews can cost you the job you really want.</p>
          </div>
        </div>
      </section>

      {/* 5. Quote Banner */}
      <div className="container">
        <div className="quote-banner-box">
          <span className="big-quote">“</span>
          <div className="quote-text-side">
            <p>"The best way to predict your future is to create it."</p>
            <span>- Peter Drucker</span>
          </div>
          <div className="plant-drawing">
            <svg viewBox="0 0 80 100" width="50" height="60">
              <path d="M40,100 L40,40" stroke="#10b981" strokeWidth="3"/>
              <path d="M40,70 Q10,50 20,30 Q30,20 40,50" fill="#10b981"/>
              <path d="M40,60 Q70,40 60,20 Q50,10 40,40" fill="#059669"/>
              <rect x="25" y="85" width="30" height="15" rx="3" fill="#cbd5e1" />
            </svg>
          </div>
        </div>
      </div>

      {/* 6. Latest Career Articles (تم تعويض الـ Emojis بعبارات نصية بداخل الترتيب) */}
      <section className="container section-padding">
        <div className="left-title">
          <h2>Latest Career Articles</h2>
        </div>
        <div className="grid-4">
          <div className="article-item card-hover-effect">
            <div className="art-preview pink-bg">GOALS</div>
            <div className="art-details">
              <span className="category-tag">CAREER GROWTH</span>
              <h3>Setting SMART Goals for Career Success</h3>
              <div className="reading-time">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" style={{marginRight: '4px', verticalAlign: 'middle'}}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                5 min read
              </div>
            </div>
          </div>
          <div className="article-item card-hover-effect">
            <div className="art-preview gold-bg">QUESTIONS</div>
            <div className="art-details">
              <span className="category-tag">INTERVIEWS</span>
              <h3>Top 10 Interview Questions and How to Answer Them</h3>
              <div className="reading-time">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" style={{marginRight: '4px', verticalAlign: 'middle'}}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                6 min read
              </div>
            </div>
          </div>
          <div className="article-item card-hover-effect">
            <div className="art-preview mint-bg">TECH SKILLS</div>
            <div className="art-details">
              <span className="category-tag">SKILLS</span>
              <h3>The Most In-Demand Skills in 2024</h3>
              <div className="reading-time">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" style={{marginRight: '4px', verticalAlign: 'middle'}}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                4 min read
              </div>
            </div>
          </div>
          <div className="article-item card-hover-effect">
            <div className="art-preview sky-bg">MANAGEMENT</div>
            <div className="art-details">
              <span className="category-tag">PRODUCTIVITY</span>
              <h3>How to Manage Your Time Like a Pro</h3>
              <div className="reading-time">
                <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" style={{marginRight: '4px', verticalAlign: 'middle'}}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                7 min read
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareerTips;