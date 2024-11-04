import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
    return (
        <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Coordonnées</h3>
          <p>Jean-Charles, coach sportif</p>
          <p>Téléphone : 06 12 34 56 78</p>
          <p>Email : contact@jctrainer.com</p>
        </div>
      </div>
      <p className="footer-note">© JC Trainer 2024. Tous droits réservés. Powered by Serve And Code</p>
    </footer>
    );
};

export default Footer;