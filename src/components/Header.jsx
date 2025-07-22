import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <p>Port<span>folio</span></p>
      <div className="menu-icon" onClick={toggleMenu}>
        <img
          src={
            menuOpen
              ? 'https://img.icons8.com/ios-glyphs/40/EBEBEB/multiply.png'
              : 'https://img.icons8.com/ios-filled/40/EBEBEB/menu--v6.png'
          }
          alt="menu icon"
        />
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#edu" onClick={toggleMenu}>Education</a></li>
        <li><a href="#pro" onClick={toggleMenu}>Projects</a></li>
      </ul>
    </header>
  );
}

export default Header;
