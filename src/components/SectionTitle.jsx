const SectionTitle = ({ title, className = '' }) => (
  <div className={`mb-12 ${className}`}>
    <h2 className="text-3xl font-heading tracking-normal text-dark pb-5 relative before:absolute before:left-0 before:bottom-0 before:h-[4px] before:w-[80px] before:bg-dark after:absolute after:left-0 after:bottom-[1.5px] after:h-[1px] after:w-full after:bg-dark/20">
      {title}
    </h2>
  </div>
);

export default SectionTitle;
