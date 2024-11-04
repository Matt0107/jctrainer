import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section full-height-section" id="hero-section">
          <h1>Le coaching <span>sur mesure</span> juste <span>pour vous</span>.</h1>
          <div className="scroll-indicator">
            <span>Découvrir</span>
            <div className="scroll-line"></div>
          </div>
        </section>
      );
    }

export default HeroSection;