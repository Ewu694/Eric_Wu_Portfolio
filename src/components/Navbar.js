import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        WhilEric
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/project">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
      </ul>
    </nav>
  );
};