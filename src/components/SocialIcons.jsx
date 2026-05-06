import socialLinks from '../data/socialLinks';

const SocialIcons = ({ className = '' }) => (
  <div className={`flex items-center text-white ${className}`}>
    <h5 className="text-base mr-5 leading-none text-white/80 font-medium">Share:</h5>
    <ul className="flex space-x-4">
      {socialLinks.map(({ id, icon: Icon, href, label }) => (
        <li key={id}>
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={label}
            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center text-xl"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialIcons;
