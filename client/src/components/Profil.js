
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profil() {
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user'));

  
  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'sans-serif' }}>
        <h2>Please log in first to view your account</h2>
        <button 
          onClick={() => navigate('/login')} 
          style={{ padding: '10px 20px', background: '#ff8fa3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '15px' }}
        >
          Go to Login
        </button>
      </div>
    );
  }

 
  const userInitials = user.name ? user.name.charAt(0).toUpperCase() : '?';

  return (
    <div className="profile-page-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <div className="profile-card" style={{ background: '#fff', padding: '40px', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', width: '100%', maxWidth: '500px', textAlign: 'center' }}>
        
        
        <div className="avatar-section" style={{ marginBottom: '20px' }}>
          <div style={{ 
            width: '90px', 
            height: '90px', 
            borderRadius: '50%', 
            backgroundColor: '#ff8fa3', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '36px', 
            fontWeight: 'bold', 
            margin: '0 auto', 
            color: '#fff', 
            fontFamily: 'sans-serif' 
          }}>
            {userInitials}
          </div>
          <h2 style={{ marginTop: '15px', color: '#333', fontSize: '24px', textTransform: 'capitalize' }}>Welcome, {user.name}!</h2>
          <p style={{ color: '#888', fontSize: '14px' }}>Your profile has been created successfully</p>
        </div>

        <div style={{ borderTop: '1px solid #f1f1f1', margin: '25px 0' }}></div>

        <div className="info-section" style={{ textAlign: 'left', padding: '0 10px', fontSize: '16px', color: '#555', lineHeight: '2' }}>
          <p><strong>Full Name:</strong> <span style={{ textTransform: 'capitalize' }}>{user.name} {user.lastname || ''}</span></p>
          <p><strong>Email Address:</strong> {user.email}</p>
          <p><strong>Account Status:</strong> <span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>Active</span></p>
        </div>

      </div>
    </div>
  );
}

export default Profil;