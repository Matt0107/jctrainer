import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsDropdownOpen(false);
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
            <div className="navbar-container">
                <div className="navbar-links">
                    <Link to="philosophy-section" smooth={true} duration={500}>{t('navbar.philosophy')}</Link>
                    <Link to="services-section" smooth={true} duration={500}>{t('navbar.services')}</Link>
                    <Link to="testimonials" smooth={true} duration={500}>{t('navbar.testimonials')}</Link>
                    <Link to="footer" smooth={true} duration={500}>{t('navbar.contact')}</Link>
                </div>

                {/* Commutateur de langue pour les écrans larges */}
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

                {/* Affiche le burger icon si le menu est fermé, et le bouton de fermeture si le menu est ouvert */}
                {!isMenuOpen ? (
                    <div className="burger-icon" onClick={() => setIsMenuOpen(true)}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                ) : (
                    <button className="close-button" onClick={() => setIsMenuOpen(false)}>×</button>
                )}

                {/* Burger Menu */}
                <div className={`burger-menu ${isMenuOpen ? 'show' : ''}`}>
                    <Link to="hero-section" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>{t('navbar.home')}</Link>
                    <Link to="philosophy-section" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>{t('navbar.philosophy')}</Link>
                    <Link to="services-section" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>{t('navbar.services')}</Link>
                    <Link to="testimonials" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>{t('navbar.testimonials')}</Link>
                    <Link to="footer" smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>{t('navbar.contact')}</Link>

                    {/* Commutateur de langue visible uniquement dans le menu burger ouvert */}
                    <div className="burger-language-switcher">
                        <button onClick={() => changeLanguage('fr')}>FR</button>
                        <button onClick={() => changeLanguage('en')}>EN</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
