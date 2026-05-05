import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const PortfolioCard = ({ id, title, subtitle, thumb, tech, githubLink, points, liveLink, isExpanded, setHoveredId }) => {
  const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div 
      initial={false}
      animate={{ 
        scale: isExpanded ? 1.6 : 1,
        y: isExpanded ? -20 : 0,
      }}
      transition={transition}
      className="relative flex justify-center py-6"
    >
      <div 
        onMouseEnter={() => setHoveredId(id)}
        onMouseLeave={() => setHoveredId(null)}
        className="relative w-[280px] h-[380px] bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col p-4 cursor-pointer overflow-hidden"
        style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
      >
        {/* Inside Content (Revealed as cover opens) */}
        <div className="flex-1 flex flex-col w-full h-full px-1">
          <motion.div
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="flex flex-col h-full py-1"
          >
            {/* Header Section - Tightened */}
            <div className="text-center mb-2">
              <h4 className="text-xl font-black text-black uppercase tracking-tighter leading-none mb-1">{title}</h4>
              <p className="text-[7px] text-gray-400 uppercase tracking-[0.15em] font-bold mb-3">{subtitle}</p>
              
              {/* Tech Stack Pills - More compact */}
              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {tech?.map((t) => (
                  <span key={t} className="px-1.5 py-0.5 text-[6.5px] font-bold border border-black/10 rounded-sm text-black/60 uppercase tracking-tighter bg-gray-50/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Points Section - Utilizing full height/width */}
            <div className="flex-1 px-1">
              <ul className="space-y-2">
                {points?.map((point, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1" />
                    <p className="text-[9px] leading-[1.3] text-black/90 font-medium tracking-tight text-left">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Links - Compact but clear */}
            <div className="pt-2 border-t border-black/5 flex items-center justify-between mt-2">
              {githubLink ? (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[7.5px] font-black text-black uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  <FaGithub size={10} /> GitHub
                </a>
              ) : (
                <span className="text-[7.5px] text-gray-300 uppercase tracking-widest italic">Private</span>
              )}

              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[7.5px] font-black text-black uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  Live <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Cover (Opens on hover) - Premium Steel Blue Notebook Style */}
        <motion.div 
          animate={{ 
            rotateY: isExpanded ? -120 : 0,
          }}
          transition={transition}
          className="absolute inset-0 w-full h-full bg-[#002029] rounded-lg cursor-pointer origin-left shadow-[8px_8px_25px_rgba(0,0,0,0.6)] z-10 overflow-visible border border-white/10"
          style={{ 
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Notebook Spine Hinge */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/20 border-r border-white/10 z-30" />
          <div className="absolute left-7 top-0 bottom-0 w-[1px] bg-white/10 z-30" />

          {/* Hardcover Texture/Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg">
            <img 
              src={thumb} 
              alt={title} 
              className="w-full h-full object-cover grayscale opacity-10 contrast-150 brightness-75 mix-blend-overlay" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-white/5 to-transparent opacity-40" />
          </div>

          {/* Elastic Band Detail */}
          <div className="absolute right-4 top-0 bottom-0 w-3 bg-[#1a1a1a] shadow-[inset_1px_0_2px_rgba(255,255,255,0.1),2px_0_5px_rgba(0,0,0,0.4)] z-40 opacity-80" />

          {/* Ribbon Bookmark Detail */}
          <div className="absolute left-12 -bottom-4 w-4 h-8 bg-[#1a1a1a] shadow-md z-0 rounded-b-sm origin-top transform rotate-3" />
          
          {/* Debossed Label/Title */}
          <div className="relative z-20 mt-[45%] mx-auto w-[75%] bg-[#0f172a]/40 backdrop-blur-md p-4 border border-white/20 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center min-h-[70px] rounded-sm overflow-hidden">
            <h3 
              className="font-black text-white uppercase text-center whitespace-nowrap drop-shadow-md w-full px-1"
              style={{ 
                fontSize: title.length > 12 ? '0.85rem' : title.length > 8 ? '1.0rem' : '1.2rem',
                letterSpacing: title.length > 12 ? '0.05em' : title.length > 8 ? '0.15em' : '0.25em'
              }}
            >
              {title}
            </h3>
            <div className="mt-2 h-[1px] w-6 bg-white/30" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PortfolioCard;
