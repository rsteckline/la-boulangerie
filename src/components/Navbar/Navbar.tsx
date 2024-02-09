import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const isDetailPage = location.pathname.includes('/breads/') && location.pathname.split('/').length > 3;

  return (
    <div className="navbar">
      <h1>Belongea's Boulangerie</h1>
      <div className="nav-links">
        {isDetailPage && (
          <Link to="#" onClick={handleBack} className="back-link">
            Back
          </Link>
        )}
          <Link to="/">Home</Link>
      </div>
    </div>
  );
};


export default Navbar;