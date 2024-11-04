import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-links">
        <Link to="hero-section" smooth={true} duration={500}>Accueil</Link>
        <Link to="philosophy-section" smooth={true} duration={500}>Philosophie</Link>
        <Link to="testimonials" smooth={true} duration={500}>Témoignages</Link>
        <Link to="footer" smooth={true} duration={500}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
