import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = false;

  const isLoginPage = location.pathname === '/login';

  const showBackButton = location.pathname.includes("/breads/") || location.pathname.includes("/countries/") || location.pathname === '/login' || location.pathname === '/create-account';

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="navbar">
      <h1>
        <Link to="/" className="app-title">Belongea's Boulangerie</Link>
      </h1>

      <div className="nav-links">
        {showBackButton && (
          <Link to="#" onClick={handleBack} className="back-link">Back</Link>
        )}

        {!isLoggedIn && !isLoginPage ? (
          <Link to="/login" className="login-link">Login</Link>
        ) : null}
      </div>
    </div>
  );
};


export default Navbar;
