import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioCard = ({ title, subtitle, thumb, tech, githubLink, bullets }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={thumb}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-gray-900 rounded-full p-3 hover:bg-gray-100 transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <FaGithub className="text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <div className="mb-3">
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        </div>

        {/* Tech badges */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Bullets */}
        {bullets && bullets.length > 0 && (
          <ul className="space-y-1.5 text-sm text-gray-600 leading-snug flex-1">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {/* Footer links */}
        {githubLink && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-black transition-colors"
            >
              <FaGithub /> View on GitHub <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
