import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Belongea Boulangerie</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Navbar;
