import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Preloader from './components/Preloader';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

const App = () => {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPreloaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rokstar">
      <Preloader preloaded={preloaded} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default App;
