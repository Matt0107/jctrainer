import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi'; // Importation des icônes
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contact</h3>
                    <p>Jean-Charles, coach sportif</p>
                    <p><FiPhone className="contact-icon" /> 06 12 34 56 78</p>
                    <p><FiMail className="contact-icon" /> contact@jctrainer.com</p>
                </div>
            </div>
            <p className="footer-note">© JC Trainer 2024. Tous droits réservés. Powered by Serve And Code</p>
        </footer>
    );
};

export default Footer;
