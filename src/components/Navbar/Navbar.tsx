import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = false;

  const handleBack = () => {
    navigate(-1);
  };

  const isDetailPage =
    location.pathname.includes("/breads/") &&
    location.pathname.split("/").length >= 3;

  return (
    <div className="navbar bg-[#82aa9f] shadow-[0_-2px_4px_rgba(0,0,0,0.1)] fixed w-full h-12 z-[1000] flex justify-between items-center p-4 left-0 bottom-0">
      <h1>
        <Link to="/" className="app-title">
          Belongea's Boulangerie
        </Link>
      </h1>

      <div className="nav-links flex items-center justify-between w-[30%]">
        {isDetailPage && (
          <Link to="#" onClick={handleBack} className="back-link">
            Back
          </Link>
        )}

        {!isLoggedIn ? (
          <>
            <Link to="/login"className="login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/breadbox" className="breadbox">BreadBox</Link>
            <button onClick={() => console.log("Log out")}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
