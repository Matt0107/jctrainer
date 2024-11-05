import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false); // Ferme le menu déroulant après la sélection
  };

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
        <Link to="hero-section" smooth={true} duration={500}>{t('navbar.home')}</Link>
        <Link to="philosophy-section" smooth={true} duration={500}>{t('navbar.philosophy')}</Link>
        <Link to="testimonials" smooth={true} duration={500}>{t('navbar.testimonials')}</Link>
        <Link to="footer" smooth={true} duration={500}>{t('navbar.contact')}</Link>
      </div>

      <div 
        className="language-switcher" 
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className="language-button">{i18n.language.toUpperCase()}</button>
        {isDropdownOpen && (
          <div className="language-dropdown">
            <button onClick={() => changeLanguage('fr')}>FR</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
