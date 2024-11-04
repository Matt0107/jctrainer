import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
        <h1>Le coaching <span>sur mesure</span> juste <span>pour vous</span>.</h1>
        <button className="discover-button">Découvrir</button>
      </section>
    );
};

export default HeroSection;