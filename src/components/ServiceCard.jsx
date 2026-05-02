// Service card now accepts Icon as a React component from react-icons
const ServiceCard = ({ title, desc, Icon, color }) => (
  <div className="service group relative flex px-3 py-5 rounded-md duration-300 hover:bg-gray-50 before:absolute before:left-10 before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300 after:absolute after:left-9 after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300">
    <div className="mr-4 bg-white group-hover:bg-gray-50 relative flex-shrink-0 self-start w-[50px] md:w-[60px] flex items-center justify-center pt-1">
      <Icon style={{ color, fontSize: '2rem' }} />
    </div>
    <div>
      <h2 className="font-semibold text-base mb-3">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default ServiceCard;
