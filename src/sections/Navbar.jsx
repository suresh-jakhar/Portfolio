import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react';
import navLinks from '../data/navLinks';

const NAV_LINK_CLS =
  'block text-white font-medium text-sm relative cursor-pointer after:duration-300 ' +
  'after:content-[attr(data-hover)] after:absolute after:left-1/2 after:top-3/4 ' +
  'after:opacity-0 after:-translate-x-1/2 hover:after:top-1/2 hover:after:opacity-100 ' +
  'after:hover:-translate-x-1/2 after:hover:-translate-y-1/2';

const MOBILE_LINK_CLS =
  'block text-white font-medium text-sm relative cursor-pointer py-1 px-3 duration-[400ms] hover:bg-white hover:text-dark';

const ACTIVE_DOT =
  'before:absolute before:h-[6px] before:w-[6px] before:rounded-full before:bg-white ' +
  'before:left-1/2 before:-translate-x-1/2 before:-bottom-3';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-30 duration-[400ms] ${scrolled ? 'py-2' : 'py-2 md:py-5'}`}
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container">
        <div className="sm:flex items-center justify-between">
          {/* Logo + hamburger */}
          <div className="flex items-center justify-between">
            <a href="/" className="leading-none inline-block">
              <span className="text-white font-heading text-xl tracking-widest">PORTFOLIO</span>
            </a>
            <span className="sm:hidden">
              <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={25} color="white" />
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="navbar hidden sm:block">
            <ul className="nav flex space-x-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      download={link.download}
                      data-hover={link.name.toLowerCase()}
                      className={NAV_LINK_CLS}
                    >
                      <span className="block duration-300">{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      spy
                      smooth
                      to={link.href}
                      activeClass={ACTIVE_DOT}
                      data-hover={link.name.toLowerCase()}
                      className={NAV_LINK_CLS}
                    >
                      <span className="block duration-300">{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile nav */}
          <nav
            className={`bg-black overflow-hidden duration-300 sm:hidden ${
              menuOpen ? 'mt-3 h-[130px]' : 'mt-0 h-0'
            }`}
          >
            <ul className="nav p-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.isExternal ? (
                    <a href={link.href} download={link.download} className={MOBILE_LINK_CLS}>
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      spy
                      smooth
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
