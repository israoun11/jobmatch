import React from 'react';
import '../App.css';

const ProfileHero = () => {
  return (
    <div className="profile-hero-wrapper">
      <div className="container">
        <div className="profile-hero-inner">
          
          
          <div className="hero-left-content">
            <span className="hero-subtitle">How to get your job</span>
            <h1 className="hero-title">Build Your Personal Account Profile</h1>
            <p className="hero-description">
              Create an account for job information that you wanted, get notification everyday 
              and you can easily apply directly to the company you want create and account now for free.
            </p>
            
            <div className="hero-actions">
              <button className="btn-edit-profile">Edit Profile</button>
              
              <div className="notification-box">
                <div className="bell-icon-wrapper">
                  <span className="bell-badge"></span>
                  <img src="https://img.icons8.com/?size=100&id=ctT3iPlvlrxa&format=png&color=000000" width={50}/>
                </div>
                <div className="notification-text">
                  <h4>New Interview</h4>
                  <p>You has new interview today</p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="hero-right-graphics">
            
            
            
            <div className="floating-card top-card float-anim-1">
              <img src="https://th.bing.com/th/id/R.102d338124c0fb69b7176af467b85caf?rik=wuJtF6cAUs0YCg&pid=ImgRaw&r=0" alt="User" className="card-avatar" />
              <div className="card-info">
                <h4>Complete your profile</h4>
                <span className="completion-rate">95% Completed</span>
              </div>
            </div>

            
            <img 
              src="https://tse4.mm.bing.net/th/id/OIP.b6eGpIhvk-cYPINBMsuJWgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="People building profile" 
              className="main-hero-img"
            />

            
            <div className="floating-card bottom-card float-anim-2">
              <img src="https://tse3.mm.bing.net/th/id/OIP.5WIOPQpWs35oxaptZ5Ga_QHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Devid Smith" className="card-avatar circle" />
              <div className="card-info text-center">
                <h4>Abderazzak Ghanmi</h4>
                <p>UI/UX Designer</p>
                <a href="#hire" className="hire-link">Hire Me!</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileHero;