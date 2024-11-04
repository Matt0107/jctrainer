import React, { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
    {
      name: 'Richard Strul',
      text: 'Je suis arrivé chez JC Trainer il y a 13 ans avec un dos en vrac, une jambe à moitié paralysée par la sciatique, et la sentence des médecins : plus de sport. Au bout de quelques mois, j\'avais repris le badminton, le volley et le ski hors piste.',
    },
    {
      name: 'Marie Dupont',
      text: 'JC Trainer a totalement changé ma vie. Grâce à lui, j\'ai retrouvé la forme et la motivation que j\'avais perdues depuis des années.',
    },
    {
      name: 'Paul Durand',
      text: 'Un coaching personnalisé et une écoute incroyable. Jean-Christophe sait vraiment comment motiver et adapter les exercices à chacun.',
    },
  ];

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [fade, setFade] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false); // Démarre le fade-out
        setTimeout(() => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
          setFade(true); // Démarre le fade-in
        }, 500); // 500ms pour le fade-out
      }, 5000); // Changement de témoignage toutes les 5 secondes
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <section className="testimonials-section" id="testimonials">
        <h2>Nos clients en parlent mieux que nous</h2>
        <div className={`testimonial ${fade ? 'fade-in' : 'fade-out'}`}>
          <p className="testimonial-text">"{testimonialsData[currentTestimonial].text}"</p>
          <p className="testimonial-author">- {testimonialsData[currentTestimonial].name}</p>
        </div>
      </section>
    );
  }

export default Testimonials;