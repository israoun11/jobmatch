import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section 1: Brand & Socials */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            Job<span className="logo-dot">Match</span>
          </h2>
          <p className="footer-description">
            Connecting talented IT professionals with top-tier companies across Tunisia. 
            Find remote, on-site, and freelance roles today.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Section 2: For Candidates (Linked to Navbar) */}
        <div className="footer-links-column">
          <h3>For Candidates</h3>
          <ul>
            <li><Link to="/jobs?category=&location=">Browse IT Jobs</Link></li>
            <li><Link to="/careertips">Career Tips</Link></li>
            <li><Link to="/register">Create Account</Link></li>
            <li><Link to="/login">Candidate Sign In</Link></li>
          </ul>
        </div>

        {/* Section 3: For Employers (Linked to Navbar) */}
        <div className="footer-links-column">
          <h3>For Employers</h3>
          <ul>
            <li><Link to="/employers">Browse Candidates</Link></li>
            <li><Link to="/register">Post a Job / Register</Link></li>
            <li><Link to="/login">Employer Login</Link></li>
            <li><Link to="/">Success Stories</Link></li>
          </ul>
        </div>

        {/* Section 4: Locations & Contact */}
        <div className="footer-links-column">
          <h3>Locations Hub</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Tunis Office</li>
            <li><i className="fas fa-map-marker-alt"></i> Gabes Hub</li>
            <li>
              <i className="fas fa-envelope"></i> 
              <a href="mailto:contact@jobmatch.tn"> contact@jobmatch.tn</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JobMatch. All rights reserved. Built with love for Tunisian Developers.</p>
        <div className="footer-bottom-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;