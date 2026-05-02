import { useState, useEffect } from 'react';
import projects from '../data/projects';
import PortfolioCard from '../components/PortfolioCard';
import SectionTitle from '../components/SectionTitle';
import WaveDivider from '../components/WaveDivider';

const FILTER_BTN =
  'text-black capitalize font-medium relative after:absolute after:h-[6px] after:w-[6px] after:rounded-full after:bg-slate-700 after:left-1/2 after:-translate-x-1/2 after:-bottom-1';

const PortfolioSection = () => {
  const [categories, setCategories] = useState([]);
  const [activeFilter, setActiveFilter] = useState('*');
  const [filtered, setFiltered] = useState(projects);

  useEffect(() => {
    const allCats = [...new Set(projects.flatMap((p) => p.categories))];
    setCategories(allCats);
  }, []);

  const handleFilter = (cat) => {
    setActiveFilter(cat);
    setFiltered(cat === '*' ? projects : projects.filter((p) => p.categories.includes(cat)));
  };

  return (
    <section className="bg-gray-50 relative pt-[100px] pb-[100px] lg:pb-[200px]" id="portfolio">
      <div className="container">
        <SectionTitle title="Portfolios" />

        {/* Filter buttons */}
        <nav className="mb-10 space-x-5">
          <button
            data-filter="*"
            onClick={() => handleFilter('*')}
            className={`${FILTER_BTN} ${activeFilter === '*' ? 'after:opacity-100' : 'after:opacity-0'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              data-filter={cat}
              onClick={() => handleFilter(cat)}
              className={`${FILTER_BTN} ${activeFilter === cat ? 'after:opacity-100' : 'after:opacity-0'}`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
          {filtered.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      <WaveDivider fillColor="#ffffff" />
    </section>
  );
};

export default PortfolioSection;
