import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import './PageHeader.css';

const PageHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={`PageHeader ${menuOpen ? 'open' : ''}`}>
      <img src={Logo} className="Logo" alt="logo" />
      <button className="Burger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`Nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/videos">Videos</Link>
      </nav>
    </header>
  );
};

export default PageHeader;
