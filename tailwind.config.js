/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Base colors
        'base': {
          light: '#FFF8F2',
          dark: '#1C1C1C',
        },
        // Section backgrounds
        'section': {
          light: '#FBE9DD',
          dark: '#2A2A2A',
        },
        // Accent colors
        'accent': {
          DEFAULT: '#D64545',
          hover: {
            light: '#B93737',
            dark: '#A02E2E',
          },
        },
        // Text colors
        'text': {
          heading: {
            light: '#2C2C2C',
            dark: '#F5F5F5',
          },
          body: {
            light: '#4A4A4A',
            dark: '#D0D0D0',
          },
        },
        // UI elements
        'ui': {
          border: {
            light: '#E6C4A8',
            dark: '#444444',
          },
          shadow: {
            light: '#E6C4A8',
            dark: '#333333',
          },
        },
        // Card colors
        'card': {
          light: '#FFFFFF',
          dark: '#2C2C2C',
        },
        // Status colors
        'success': '#3BA776',
        'error': '#E55D5D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 