import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaHome,
  FaInfoCircle,
  FaSuitcase,
  FaEnvelope,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/" className="navbar__link">
          <FaCode size={30} className="navbar__icon" />
          <span className="navbar__title">Tejas Vijay Pathak</span>
        </Link>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/" className="navbar__link">
            <FaHome className="navbar__icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar__link">
            <FaInfoCircle className="navbar__icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="navbar__link">
            <FaSuitcase className="navbar__icon" />
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar__link">
            <FaEnvelope className="navbar__icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
