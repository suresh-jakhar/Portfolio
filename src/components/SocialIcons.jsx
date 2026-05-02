import socialLinks from '../data/socialLinks';

const SocialIcons = ({ className = '' }) => (
  <div className={`flex items-center ${className}`}>
    <h5 className="text-base mr-5 leading-none">Share:</h5>
    <ul className="flex space-x-4">
      {socialLinks.map(({ id, icon: Icon, href, label }) => (
        <li key={id}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialIcons;
