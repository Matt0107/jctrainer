import React from 'react';
import { FiClock, FiCalendar, FiHeart, FiPieChart } from 'react-icons/fi';
import '../styles/Services.css';

function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Une méthode unique, précise et efficace</h2>
      <p className="services-description">
        Chaque personne a son métabolisme, son rythme de vie et ses besoins. 
        Ma mission est de vous offrir un coaching personnalisé et adapté pour atteindre vos objectifs de façon durable.
      </p>
      <div className="services-grid">
        <div className="service">
          <FiClock className="service-icon" />
          <h3 className="service-title">Gérez le timing</h3>
          <p className="service-description">Gérez le timing de la nutrition pour des résultats optimaux.</p>
        </div>
        <div className="service">
          <FiCalendar className="service-icon" />
          <h3 className="service-title">Cyclez vos entraînements</h3>
          <p className="service-description">Alternez la diète et les entraînements pour optimiser les résultats.</p>
        </div>
        <div className="service">
          <FiHeart className="service-icon" />
          <h3 className="service-title">Alliez tension et métabolisme</h3>
          <p className="service-description">Combinez la tension mécanique et le stress métabolique.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
