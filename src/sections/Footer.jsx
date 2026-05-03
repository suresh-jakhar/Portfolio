import { FaHeart } from 'react-icons/fa';
import { IoChevronUpSharp } from 'react-icons/io5';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => (
  <footer className="bg-gray-50 pt-10 md:pt-14 lg:pt-5 pb-5 relative">
    <div className="container">
      <div className="text-center">
        <p>
          © Suresh Jakhar {new Date().getFullYear()} · Built with{' '}
          <FaHeart className="inline text-red-600" /> in React
        </p>
      </div>
    </div>

    {/* Scroll to top */}
    <button
      onClick={() => scroll.scrollToTop()}
      aria-label="Scroll to top"
      className="absolute left-1/2 -top-[35px] -translate-x-1/2 bg-white w-14 md:w-[70px] h-14 md:h-[70px] rounded-full text-center shadow-scroll-top"
    >
      <IoChevronUpSharp className="inline text-2xl" />
    </button>
  </footer>
);

export default Footer;
