import React from 'react';
import './Navbar.css';  // Assuming you will add a separate CSS file for styling
import profile from '../assets/icons/person.svg';
import Profile from './pages/Profile';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="nav-links">
          <Link to="/">Home</Link> {/* Link instead of a */}
          <Link to="/AppliedJobs">Your Listing</Link> {/* Link to AppliedJobs */}
          <Link to="#">Leaderboard</Link> {/* Link for Leaderboard */}
        </div>
        <div className="nav-profile">
          {/* Clickable Profile Image */}
          <Link to="/Profile">
            <img src={profile} alt="Profile" />
          </Link>
        </div>
      </div>
      <div className="nav-search">
        <input type="text" placeholder="Search Job" className="search-input" />
        <input type="text" placeholder="Search Location" className="search-input" />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
