import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          {/* Logo */}
          <img src="https://hindi.eci.gov.in/uploads/monthly_2018_09/eci200x200.png.0b64512a61d9374ccebae62e674b8879.png" alt="ECI Logo" className="logo" />
          <h2>Election Commission of India</h2>
        </div>
        <div className="navbar-links">
          {/* Use React Router Links for navigation */}
          <Link to="/adminlogin" className="nav-link">Login</Link>
          
          <a href="#social" className="nav-link">Social Media</a>
        </div>
      </nav>

      {/* Centered Title */}
      <header className="header">
        <div className="center-title">
          <h1>ELECTION MONITORING SYSTEM</h1>
        </div>
      </header>

      {/* Section Links */}
      <div className="section-links">
        <div className="section-item">
          <h3>Myth Vs Reality</h3>
        </div>
        <div className="section-item">
          <h3>Assembly Election AndhraPradesh</h3>
        </div>
        <div className="section-item">
          <h3>Assembly Election I</h3>
        </div>
        <div className="section-item">
          <h3>Photo Gallery</h3>
        </div>
        <div className="section-item">
          <h3>Press Releases</h3>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="main-sections">
        <div className="main-item" style={{ backgroundColor: '#2e86de' }}>
          <span className="main-icon">💼</span>
          <h4>Political Parties/Candidates</h4>
        </div>
        <div className="main-item" style={{ backgroundColor: '#f1c40f' }}>
          <span className="main-icon">🗳</span>
          <h4>Election Management</h4>
        </div>
        <div className="main-item" style={{ backgroundColor: '#d07966' }}>
          <span className="main-icon">📰</span>
          <h4>Media & Publications</h4>
        </div>
        <div className="main-item" style={{ backgroundColor: '#2ecc71' }}>
          <span className="main-icon">📚</span>
          <h4>Voter Education</h4>
        </div>
        <div className="main-item" style={{ backgroundColor: '#e67e22' }}>
          <span className="main-icon">🌐</span>
          <h4>ICT Apps</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;