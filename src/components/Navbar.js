import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    {/* Logo on the Left */}
    <div className="navbar-left">
      <img 
        src="https://i.postimg.cc/j5Rd9QRs/DALL-E-2025-02-12-15-33-01-A-modern-and-minimalistic-logo-for-Student-Empowerment-The-design-sh.webp" 
        alt="Student Empowerment Portal Logo" 
        className="logo-image"
      />
    </div>

    {/* Centered Title & Subtitle */}
    <div className="navbar-center">
      <h1>Student Empowerment</h1>
      <p className="navbar-subtitle">"Success to Your Career Path"</p>
    </div>

    {/* Navigation Links (Only Home) */}
    <ul className="navbar-links">
    </ul>
  </nav>
);

export default Navbar;
