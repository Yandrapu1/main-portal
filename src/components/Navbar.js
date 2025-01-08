import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>Student Empowerment Portal</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/resources">Resources</Link></li>
      <li><Link to="/forums">Forums</Link></li>
    </ul>
  </nav>
);

export default Navbar;
