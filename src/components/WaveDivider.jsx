// Reusable wave SVG divider used at the bottom of sections
const WaveDivider = ({ fillColor = '#ffffff', className = '', showStroke = true }) => (
  <div className={`absolute left-0 -bottom-[1px] w-full ${className}`}>
    <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" fill={fillColor} className="overflow-visible">
      <polygon 
        points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300" 
        stroke={showStroke ? "rgba(255,255,255,0.2)" : "none"}
        strokeWidth="1"
      />
    </svg>
  </div>
);

export default WaveDivider;
