import React from 'react';

export default function Backend(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="64" 
      height="64" 
      viewBox="0 0 14 14" 
      {...props}
    >
      <path 
        fill="none" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1"
        d="M13.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h4v7Zm-13-4h13m-3.5 4v-7"
      />
    </svg>
  );
}

// Store path and viewBox metadata for the Canvas renderer
Backend.path = "M13.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h4v7Zm-13-4h13m-3.5 4v-7";
Backend.viewBox = "0 0 14 14";
Backend.isStroke = true;
Backend.strokeWidth = 1;
