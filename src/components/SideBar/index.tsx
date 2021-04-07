import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SideBar = () => {
  return (
    <nav className="sideBarContainer">
      <Link to="/home">
        <i className="fas fa-home"></i>
      </Link>
      <Link to="/profile">
        <i className="fas fa-user"></i>
      </Link>
    </nav>
  );
};

export default SideBar;
