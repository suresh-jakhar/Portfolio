import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react';
import navLinks from '../data/navLinks';

const NAV_LINK_CLS =
  'block text-white font-medium text-sm cursor-pointer ' +
  'px-3 py-1 rounded-full border border-transparent transition-[border-color] duration-300';

const MOBILE_LINK_CLS =
  'block text-white font-medium text-sm cursor-pointer py-1 px-3 duration-[400ms] hover:bg-white hover:text-dark';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef(null);

  // Solid background after scrolling past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver to reliably track which section is in view
  useEffect(() => {
    const sectionIds = navLinks
      .filter((l) => !l.isExternal)
      .map((l) => l.href);

    const entries = {};

    observerRef.current = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          entries[entry.target.id] = entry.intersectionRatio;
        });
        // Pick the section with the highest visible ratio
        const top = Object.entries(entries).sort((a, b) => b[1] - a[1])[0];
        if (top && top[1] > 0) setActiveSection(top[0]);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: '-60px 0px 0px 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-30 duration-[400ms] ${
        scrolled
          ? 'py-4 bg-black/95 shadow-md'
          : 'py-4 md:py-8 bg-transparent'
      }`}
    >
      <div className="container">
        <div className="sm:flex items-center justify-end">
          {/* Hamburger (mobile only) */}
          <div className="flex items-center justify-end sm:hidden">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={25} color="white" />
          </div>

          {/* Desktop nav */}
          <nav className="navbar hidden sm:block">
            <ul className="nav flex space-x-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={NAV_LINK_CLS}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      smooth
                      duration={800}
                      offset={-70}
                      to={link.href}
                      className={`${NAV_LINK_CLS} ${
                        activeSection === link.href ? 'border-white/60' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile nav */}
          <nav
            className={`bg-black/90 overflow-hidden duration-300 sm:hidden ${
              menuOpen ? 'mt-3 h-[200px]' : 'mt-0 h-0'
            }`}
          >
            <ul className="nav p-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.isExternal ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className={MOBILE_LINK_CLS}>
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      smooth
                      duration={300}
                      offset={-70}
                      to={link.href}
                      className={MOBILE_LINK_CLS}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
