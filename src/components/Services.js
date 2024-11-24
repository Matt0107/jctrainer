import React, { useEffect, useRef, useState } from 'react';
import { FaDumbbell, FaCalendarAlt, FaHeartbeat } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

function Services() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          },
          { threshold: 0.4 }
        );
      
        const services = sectionRef.current?.querySelectorAll('.service');
      
        services?.forEach((service) => observer.observe(service));
      
        return () => {
          services?.forEach((service) => observer.unobserve(service));
        };
      }, []);

    return (
        <section
            className={`services-section ${isVisible ? 'animate-icons' : ''}`}
            id="services-section"
            ref={sectionRef}
        >
            {/* Première partie avec le fond en filigrane */}
            <div className="services-intro">
                <h2 className="services-title">{t('services.title')}</h2>
                <p className="services-description">{t('services.description')}</p>
            </div>

            {/* Deuxième partie avec les icônes de services */}
            <div className="services-grid">
                <div className="service">
                    <FaDumbbell className="service-icon" />
                    <h3 className="service-title">{t('services.timing.title')}</h3>
                    <p className="service-description">{t('services.timing.description')}</p>
                </div>
                <div className="service">
                    <FaCalendarAlt className="service-icon" />
                    <h3 className="service-title">{t('services.cycle.title')}</h3>
                    <p className="service-description">{t('services.cycle.description')}</p>
                </div>
                <div className="service">
                    <FaHeartbeat className="service-icon" />
                    <h3 className="service-title">{t('services.tension.title')}</h3>
                    <p className="service-description">{t('services.tension.description')}</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
