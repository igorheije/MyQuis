import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

const SideBar = () => {
  return (
    <nav className="sideBarContainer">
      <a>
        <i className="fas fa-home"></i>
      </a>
      <a>
        <i className="fas fa-user"></i>
      </a>
    </nav>
  );
};

export default SideBar;
