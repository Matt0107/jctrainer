import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const { t } = useTranslation();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [fade, setFade] = useState(true);
    const testimonialsData = t('testimonials.clients', { returnObjects: true });

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
                setFade(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonialsData.length]);

    return (
        <section className="testimonials-section" id="testimonials">
            <h2>{t('testimonials.title')}</h2>
            <div className={`testimonial ${fade ? 'fade-in' : 'fade-out'}`}>
                <p className="testimonial-text">"{testimonialsData[currentTestimonial].text}"</p>
                <p className="testimonial-author">- {testimonialsData[currentTestimonial].name}</p>
            </div>
        </section>
    );
};

export default Testimonials;
