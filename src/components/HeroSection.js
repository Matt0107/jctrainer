import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/HeroSection.css';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section className="hero-section" id="hero-section">
            <h1>{t('hero.title')}</h1>
            <div className="scroll-indicator">
                <span>{t('hero.discover')}</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default HeroSection;
