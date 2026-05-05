import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../data/projects';
import PortfolioCard from '../components/PortfolioCard';
import SectionTitle from '../components/SectionTitle';

const PortfolioSection = () => {
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('*');
  const [filtered, setFiltered] = useState(projects);
  const [hoveredId, setHoveredId] = useState(null);
  
  // State for smooth tab position
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabsRef = useRef([]);

  useEffect(() => {
    // Explicitly set categories in the order requested by user
    setCategories(['Full Stack', 'AI-ML', 'Data Analysis']);
  }, []);

  const handleFilter = (cat, index) => {
    setActiveFilter(cat);
    setFiltered(cat === '*' ? projects : projects.filter((p) => p.categories.includes(cat)));
    
    // Update cursor position immediately on click
    const selectedTab = tabsRef.current[index];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  };

  // Sync cursor on initial load or category change
  useEffect(() => {
    const allTabs = ['All', ...categories];
    const currentIndex = activeFilter === '*' ? 0 : allTabs.indexOf(activeFilter);
    const selectedTab = tabsRef.current[currentIndex];
    
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [categories, activeFilter]);

  return (
    <section 
      className="bg-[#0a0a0a] pt-8 pb-20 lg:pt-12 lg:pb-32 relative overflow-visible" 
      id="portfolio"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        {/* Blurrable Header */}
        <motion.div
          animate={{ filter: hoveredId ? 'blur(10px)' : 'blur(0px)', opacity: hoveredId ? 0.6 : 1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="Projects" className="mb-2" isLight={true} />

          {/* Smooth Sliding Filter Tabs */}
          <div className="mb-12 flex justify-center lg:justify-start">
            <ul
              onMouseLeave={() => {
                // Reset to active filter position
                const allTabs = ['All', ...categories];
                const currentIndex = activeFilter === '*' ? 0 : allTabs.indexOf(activeFilter);
                const selectedTab = tabsRef.current[currentIndex];
                if (selectedTab) {
                  const { width } = selectedTab.getBoundingClientRect();
                  setPosition({
                    left: selectedTab.offsetLeft,
                    width,
                    opacity: 1,
                  });
                }
              }}
              className="relative flex w-fit rounded-full border border-white/10 bg-neutral-900/50 p-1 shadow-sm"
            >
              {/* "All" Tab */}
              <Tab
                ref={(el) => (tabsRef.current[0] = el)}
                setPosition={setPosition}
                onClick={() => handleFilter('*', 0)}
                isActive={activeFilter === '*'}
              >
                All
              </Tab>

              {/* Category Tabs */}
              {categories.map((cat, i) => (
                <Tab
                  key={cat}
                  ref={(el) => (tabsRef.current[i + 1] = el)}
                  setPosition={setPosition}
                  onClick={() => handleFilter(cat, i + 1)}
                  isActive={activeFilter === cat}
                >
                  {cat}
                </Tab>
              ))}

              <Cursor position={position} />
            </ul>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 relative">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              animate={{ 
                filter: hoveredId && hoveredId !== project.id ? 'blur(10px)' : 'blur(0px)',
                opacity: hoveredId && hoveredId !== project.id ? 0.4 : 1,
                scale: hoveredId && hoveredId !== project.id ? 0.95 : 1
              }}
              transition={{ duration: 0.8 }}
              className="relative"
              style={{ 
                zIndex: hoveredId === project.id ? 100 : 1,
              }}
            >
              <PortfolioCard 
                {...project} 
                isExpanded={hoveredId === project.id}
                setHoveredId={setHoveredId}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tab = React.forwardRef(({ children, setPosition, onClick, isActive }, ref) => {
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${
        isActive ? 'text-white mix-blend-difference' : 'text-gray-400'
      } md:px-6`}
    >
      {children}
    </li>
  );
});

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="absolute z-0 h-8 rounded-full bg-white shadow-md md:h-[32px]"
    />
  );
};

export default PortfolioSection;
