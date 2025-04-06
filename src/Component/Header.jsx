import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="icon" />
          ) : (
            <FaBars className="icon" />
          )}
        </div>

        {/* Logo */}
        <h2 className="logo">K A R D S</h2>
      </div>

      {/* Dropdown Menu */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#style-demo">Style Demo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
