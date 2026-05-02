/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        'white-light': 'rgba(255,255,255,0.2)',
      },
      fontFamily: {
        heading: ['Russo One', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        4: '0.25rem',
      },
      dropShadow: {
        thumb: '0 10px 30px rgba(0,0,0,0.15)',
        portfolio: '0 20px 40px rgba(0,0,0,0.2)',
      },
      boxShadow: {
        'scroll-top': '0 5px 20px rgba(0,0,0,0.1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        lineround: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        lineheight: {
          '0%': { height: '0' },
          '50%': { height: '100%', top: '0' },
          '100%': { height: '0', top: '100%' },
        },
        preloaded: {
          '0%': { width: '50%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        lineround: 'lineround 1.5s linear infinite',
        lineheight: 'lineheight 1.5s ease-in-out infinite',
        preloaded: 'preloaded 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};
