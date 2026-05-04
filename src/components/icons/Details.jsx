import React from 'react';

export default function Details(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="64" 
      height="64" 
      viewBox="0 0 24 24" 
      {...props}
    >
      <path 
        fill="currentColor" 
        fillRule="evenodd" 
        d="M4 16h10v1.5H4zm0-4.5h16V13H4zM10 7h10v1.5H10z" 
        clipRule="evenodd"
      />
      <path 
        fill="currentColor" 
        d="m4 5.25l4 2.5l-4 2.5z"
      />
    </svg>
  );
}

// Store path and viewBox metadata for the Canvas renderer
// Combining multiple paths into one for the simple Canvas Path2D renderer
Details.path = "M4 16h10v1.5H4zm0-4.5h16V13H4zM10 7h10v1.5H10zm-6-1.75l4 2.5-4 2.5z";
Details.viewBox = "0 0 24 24";
Details.isStroke = false;
