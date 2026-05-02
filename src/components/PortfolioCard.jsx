import { useState, lazy, Suspense } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';

// Lazy load the modal to avoid loading react-player unless needed
const ReactPlayer = lazy(() => import('react-player'));

const PortfolioCard = ({ title, thumb, featuredVideo, videoLink }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className={`relative duration-[400ms] rounded-md overflow-hidden hover:drop-shadow-portfolio
          ${featuredVideo
            ? 'after:absolute after:bg-black after:inset-0 after:opacity-0 after:duration-[400ms] hover:after:opacity-30'
            : ''
          }`}
      >
        <a href="/">
          <img
            src={thumb}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </a>

        {featuredVideo && (
          <button
            className="absolute inset-0 text-6xl text-white w-full z-10 flex items-center justify-center"
            onClick={() => setModalOpen(true)}
            aria-label={`Play ${title}`}
          >
            <BsFillPlayCircleFill className="inline" />
          </button>
        )}
      </div>

      {/* Video Modal */}
      {featuredVideo && modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-[90vw] max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
              <ReactPlayer
                url={videoLink}
                playing
                width="100%"
                height="100%"
                controls
              />
            </Suspense>
            <button
              className="absolute -top-8 right-0 text-white text-2xl"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioCard;
