import React from 'react';
import { FiMail } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>{t('footer.contact')}</h3>
                    <p><FiMail className="contact-icon" /> {t('footer.email')}</p>
                </div>
            </div>
            <p className="footer-note">{t('footer.note')}</p>
        </footer>
    );
};

export default Footer;
