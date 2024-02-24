import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = false;

  const handleBack = () => {
    navigate(-1);
  };

  const isDetailPage = location.pathname.includes('/breads/') && location.pathname.split('/').length >= 3;

  return (
    <div className="navbar">
      <h1>
        <Link to="/" className="app-title">Belongea's Boulangerie</Link>
      </h1>
      <div className="nav-links">
        {isDetailPage && (
          <Link to="#" onClick={handleBack} className="back-link">
            Back
          </Link>
        )}
        {!isLoggedIn ? (
          <>
            <Link to="/create-account">Create Account</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/breadbox">BreadBox</Link>
            <button onClick={() => console.log('Log out')}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;