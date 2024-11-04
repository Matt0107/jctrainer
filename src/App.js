import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
