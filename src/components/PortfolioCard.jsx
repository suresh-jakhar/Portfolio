import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const PortfolioCard = ({ id, title, subtitle, thumb, tech, githubLink, isExpanded }) => {
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
        className="relative w-[280px] h-[380px] bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-center p-6"
        style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
      >
        {/* Inside Content (Revealed as cover opens) */}
        <div className="flex flex-col items-center justify-center w-full h-full p-4 overflow-hidden">
          <motion.div
            animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : 20 }}
            transition={transition}
            className="flex flex-col items-center"
          >
            <h4 className="text-xl font-black text-black mb-1 uppercase tracking-tighter">{title}</h4>
            <p className="text-[10px] text-gray-400 mb-6 uppercase tracking-[0.2em] font-bold">{subtitle}</p>
            
            <div className="flex flex-wrap justify-center gap-1.5 mb-6 max-w-[200px]">
              {tech?.slice(0, 4).map((t) => (
                <span key={t} className="px-2 py-0.5 text-[9px] font-bold bg-neutral-100 text-neutral-500 rounded-full border border-neutral-200 uppercase">
                  {t}
                </span>
              ))}
            </div>

            <div className="h-px w-12 bg-neutral-100 mb-6" />

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[10px] font-black text-black border-b-2 border-black pb-0.5 hover:opacity-60 transition-opacity uppercase tracking-widest"
              >
                <FaGithub size={14} /> View Project
              </a>
            )}
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
          <div className="relative z-20 mt-[45%] mx-auto w-[75%] bg-[#0f172a]/40 backdrop-blur-md p-4 border border-white/20 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center min-h-[70px] rounded-sm">
            <h3 className="text-sm md:text-base font-black text-white uppercase tracking-[0.25em] text-center leading-tight break-words w-full drop-shadow-md">
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
