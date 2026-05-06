import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Preloader from './components/Preloader';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import PortfolioSection from './sections/PortfolioSection';
import SkillsSection from './sections/SkillsSection';
import AchievementsSection from './sections/AchievementsSection';

import ContactSection from './sections/ContactSection';

const App = () => {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPreloaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-root">
      <Preloader preloaded={preloaded} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <SkillsSection />
      <AchievementsSection />

      <ContactSection />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default App;
