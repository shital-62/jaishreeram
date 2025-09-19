import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Campus Connect - Dr. D.Y. Patil ACS, Pimpri Pune</h1>
      <nav>
        <ul>
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/about">ℹ️ About</Link></li>
          <li><Link to="/events">📅 Events</Link></li>
          <li><Link to="/contact">📞 Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
