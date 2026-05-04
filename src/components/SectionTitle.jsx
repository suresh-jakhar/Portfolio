const SectionTitle = ({ title, className = '', isLight = false }) => (
  <div className={`${className}`}>
    <h2 className={`text-3xl font-heading tracking-normal pb-3 relative 
      ${isLight ? 'text-white before:bg-white after:bg-white/20' : 'text-dark before:bg-dark after:bg-dark/20'}
      before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-[80px]
      after:absolute after:left-0 after:bottom-[1.5px] after:h-[1px] after:w-full`}>
      {title}
    </h2>
  </div>
);

export default SectionTitle;
