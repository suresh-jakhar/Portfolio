import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Expanded Card (Vertical Page Aspect) */}
      <motion.div
        layoutId={`card-${project.id}`}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-[320px] md:w-[400px] aspect-[280/380] bg-white rounded-xl shadow-2xl overflow-visible"
        style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
      >
        {/* Inside Content (Revealed as cover opens) */}
        <div className="absolute inset-0 bg-white rounded-xl p-8 flex flex-col overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-2xl font-black text-black mb-1 uppercase tracking-tighter">{project.title}</h2>
            <p className="text-[10px] text-gray-500 mb-6 uppercase tracking-widest">{project.subtitle}</p>
            
            <div className="h-px w-12 bg-black/10 mb-6" />

            <div className="space-y-6">
              <div>
                <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech?.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[9px] font-medium bg-gray-100 text-gray-800 rounded border border-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded hover:bg-neutral-800 transition-colors shadow-lg"
                  >
                    <FaGithub size={14} /> GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* The "Book Cover" (Swings open during expansion) */}
        <motion.div 
          layoutId={`cover-${project.id}`}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: -120 }}
          exit={{ rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#002029] z-20 origin-left rounded-xl border border-white/10 shadow-2xl overflow-hidden"
          style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
        >
           {/* Spine & Details */}
           <div className="absolute left-0 top-0 bottom-0 w-10 bg-black/20 border-r border-white/10 z-30" />
           <img 
              src={project.thumb} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale opacity-20 mix-blend-overlay"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <motion.h3 
                layoutId={`title-${project.id}`}
                className="text-xl font-black text-white uppercase tracking-[0.2em] text-center"
              >
                {project.title}
              </motion.h3>
            </div>
        </motion.div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
