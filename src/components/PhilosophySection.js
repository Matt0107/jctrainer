import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/PhilosophySection.css';
import coachImage from '../assets/JC.jpg';

const PhilosophySection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('visible');
        }
      },
      { threshold: 0.2 }
    );
  
    const currentRef = sectionRef.current; // Save a reference to avoid race conditions
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      className="philosophy-section full-height-section"
      id="philosophy-section"
    >
      <div className="philosophy-wrapper" ref={sectionRef}>
        <div className="philosophy-image">
          <img src={coachImage} alt={t('philosophy.title')} />
        </div>
        <div className="philosophy-content">
          <h2>{t('philosophy.title')}</h2>
          <p>{t('philosophy.description1')}</p>
          <p>{t('philosophy.description2')}</p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
