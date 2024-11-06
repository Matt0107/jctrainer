import React from 'react';
import { FiClock, FiCalendar, FiHeart, FiPieChart } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

function Services() {
    const { t } = useTranslation();

    return (
        <section className="services-section full-height-section" id="services-section">
            <h2 className="services-title">{t('services.title')}</h2>
            <p className="services-description">{t('services.description')}</p>
            <div className="services-grid">
                <div className="service">
                    <FiClock className="service-icon" />
                    <h3 className="service-title">{t('services.timing.title')}</h3>
                    <p className="service-description">{t('services.timing.description')}</p>
                </div>
                <div className="service">
                    <FiCalendar className="service-icon" />
                    <h3 className="service-title">{t('services.cycle.title')}</h3>
                    <p className="service-description">{t('services.cycle.description')}</p>
                </div>
                <div className="service">
                    <FiHeart className="service-icon" />
                    <h3 className="service-title">{t('services.tension.title')}</h3>
                    <p className="service-description">{t('services.tension.description')}</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
