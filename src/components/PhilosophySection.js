import React from 'react';
import '../styles/PhilosophySection.css';
import coachImage from '../assets/Mathieu.jpg'; // Chemin de l'image du coach

const PhilosophySection = () => {
    return (
        <section className="philosophy-section full-height-section" id="philosophy-section">
      <div className="philosophy-content">
        <h2>Une philosophie unique</h2>
        <p>
          Jean-Christophe, coach sportif indépendant depuis plus de 10 ans, a su développer une approche
          personnalisée et adaptée à chaque client. Sa philosophie repose sur la motivation, la persévérance,
          et l'écoute de chacun pour atteindre des objectifs de bien-être physique et mental.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et libero a nulla tempus
          dictum. Praesent dapibus venenatis nulla at vehicula. Fusce a tristique arcu, ac accumsan leo.
        </p>
      </div>
      <div className="philosophy-image">
        <img src={coachImage} alt="Jean-Christophe, Coach sportif" />
      </div>
    </section>
    );
};

export default PhilosophySection;