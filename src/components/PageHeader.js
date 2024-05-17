import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import './PageHeader.css';

const PageHeader = () => {
  const location = useLocation(); // Get the current location
  const [activePage, setActivePage] = useState(location.pathname); // Set initial active page
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setShowTitle(false);
      } else {
        setShowTitle(true);
      }
    };

    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`PageHeader`}>
      <nav className={`Nav`}>
        <Link to="/" className={`NavButton ${activePage === "/" ? "active" : ""}`} onClick={() => setActivePage("/")}>Home</Link>
        <Link to="/about" className={`NavButton ${activePage === "/about" ? "active" : ""}`} onClick={() => setActivePage("/about")}>About</Link>
        <Link to="/events" className={`NavButton ${activePage === "/events" ? "active" : ""}`} onClick={() => setActivePage("/events")}>Events</Link>
        <Link to="/videos" className={`NavButton ${activePage === "/videos" ? "active" : ""}`} onClick={() => setActivePage("/videos")}>Videos</Link>
      </nav>
      {showTitle && <span className="Title">Sydney Guitar Collective</span>}
      <img src={Logo} className="Logo" alt="logo" />
    </header>
  );
};

export default PageHeader;
