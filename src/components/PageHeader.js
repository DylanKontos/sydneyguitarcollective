import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './PageHeader.css';

const PageHeader = () => {
  const location = useLocation(); // Get the current location
  const [activePage, setActivePage] = useState(location.pathname); // Set initial active page

  return (
    <header className={`PageHeader`}>
      <nav className={`Nav`}>
      <Link to="/" className={`NavButton ${activePage === "/" ? "active" : ""}`} onClick={() => setActivePage("/")}>Home</Link>
        <Link to="/about" className={`NavButton ${activePage === "/about" ? "active" : ""}`} onClick={() => setActivePage("/about")}>About</Link>
        <Link to="/events" className={`NavButton ${activePage === "/events" ? "active" : ""}`} onClick={() => setActivePage("/events")}>Events</Link>
        <Link to="/videos" className={`NavButton ${activePage === "/videos" ? "active" : ""}`} onClick={() => setActivePage("/videos")}>Videos</Link>
      </nav>
      <span className="Title">Sydney Guitar Collective</span>
      <img src={Logo} className="Logo" alt="logo" />
    </header>
  );
};

export default PageHeader;
