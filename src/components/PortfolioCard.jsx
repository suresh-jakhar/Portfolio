import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioCard = ({ title, subtitle, thumb, tech, githubLink }) => {
  return (
    <div className="flex justify-center py-6">
      <div 
        className="relative w-[280px] h-[380px] bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-center p-6 transition-all duration-500"
        style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
      >
        {/* Inside Content (Visible when opened) - Monochrome Style */}
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h4 className="text-xl font-bold text-black mb-2">{title}</h4>
          <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest">{subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tech?.map((t) => (
              <span key={t} className="px-2 py-1 text-[10px] bg-gray-50 text-gray-500 rounded border border-gray-200">
                {t}
              </span>
            ))}
          </div>

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
            >
              <FaGithub /> VIEW PROJECT
            </a>
          )}
        </div>

        {/* Cover (Opens on hover) - Premium Steel Blue Notebook Style */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#002029] rounded-lg cursor-pointer transition-all duration-[1200ms] origin-left shadow-[8px_8px_25px_rgba(0,0,0,0.6)] z-10 hover-book-cover overflow-visible border border-white/10"
          style={{ 
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Notebook Spine Hinge */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/20 border-r border-white/10 z-30" />
          <div className="absolute left-7 top-0 bottom-0 w-[1px] bg-white/10 z-30" />

          {/* Hardcover Texture/Image (Very Subtle) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg">
            <img 
              src={thumb} 
              alt={title} 
              className="w-full h-full object-cover grayscale opacity-10 contrast-150 brightness-75 mix-blend-overlay" 
              loading="lazy"
            />
            {/* Matte finish overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/5 to-transparent opacity-40" />
          </div>

          {/* Elastic Band Detail (Moved to right) */}
          <div className="absolute right-4 top-0 bottom-0 w-3 bg-[#1a1a1a] shadow-[inset_1px_0_2px_rgba(255,255,255,0.1),2px_0_5px_rgba(0,0,0,0.4)] z-40 opacity-80" />

          {/* Ribbon Bookmark Detail (Sticking out the bottom) */}
          <div className="absolute left-12 -bottom-4 w-4 h-8 bg-[#1a1a1a] shadow-md z-0 rounded-b-sm origin-top transform rotate-3" />
          
          {/* Debossed Label/Title */}
          <div className="relative z-20 mt-[45%] mx-auto w-[75%] bg-[#0f172a]/40 backdrop-blur-md p-4 border border-white/20 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center min-h-[70px] rounded-sm">
            <h3 className="text-sm md:text-base font-black text-white uppercase tracking-[0.25em] text-center leading-tight break-words w-full drop-shadow-md">
              {title}
            </h3>
            <div className="mt-2 h-[1px] w-6 bg-white/30" />
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .flex:hover .hover-book-cover {
          transform: rotateY(-110deg);
        }
      `}</style>
    </div>
  );
}

export default PortfolioCard;
