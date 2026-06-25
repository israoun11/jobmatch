import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaTimes, FaBars } from 'react-icons/fa'; 

const Navbarr = ({ isOpen, toggleMenu }) => {
  const navigate = useNavigate();
  
  
  const user = useSelector((state) => state.user?.user) || JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user'); 
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        Job<span style={{ color: '#ff8fa3'}}>Match</span>
      </Link>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/jobs" onClick={toggleMenu}>Jobs <span className="badge">Hot</span></Link></li>
        <li><Link to="/employers" onClick={toggleMenu}>Employers</Link></li>
        <li><Link to="/candidates" onClick={toggleMenu}>Candidates</Link></li>
        <li><Link to="/careertips" onClick={toggleMenu}>Career Tips <span className="badge featured">New</span></Link></li>
      </ul>

      <div className="navbar-buttons">
        {user ? (
          
          <div className="user-logged-in" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              width: '35px', 
              height: '35px', 
              borderRadius: '50%', 
              backgroundColor: '#ff8fa3', 
              color: '#fff', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: 'bold', 
              fontSize: '16px',
              fontFamily: 'sans-serif'
            }}>
              {user.name ? user.name.charAt(0).toUpperCase() : '?'}
            </div>
            
            <Link to="/profil" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#333', textTransform: 'capitalize' }}>
              {user.name}
            </Link>
            
            <button onClick={handleLogout} className="btn-signin" style={{ background: '#f5f5f5', color: '#333', border: '1px solid #ddd', cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        ) : (
          
          <>
            <Link to="/register">
              <button className="btn-signup">Sign Up</button>
            </Link>
            <Link to="/login" className="btn-signin-link">
              <button className="btn-signin">Sign In</button>
            </Link>
            <button className="btn-post">Post a Job</button>
          </>
        )}

        <button className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbarr;