/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pine': '#00414A',
        'custom-bg-gray': '#F5F5F5',
        'nav-icons-gray': '#8C8C8C',
        'gray-border': '#BFBFBF',
        'small-button-text': '#4D4D4D',
        'small-button-border': '#BFBFBF',
        'error-message-red': '#DE2C2C',
        'success-message-green': '#2CDE85',
        'status-green': '#4CAF50',
        'status-green-bg': '#E7F4EE',
        'status-yellow': '#FFA615',
        'status-yellow-bg': '#FDF1E8',
        'status-red': '#C93D3D',
        'status-red-bg': '#FEEDEC',
        'status-blue': '#19545C',
        'status-blue-bg': '#DAE7EB'
      },
      boxShadow: {
        'header-shadow': '0 4px 6px rgba(0, 0, 0, 0.25)', 
      },
      fontSize: {
        'font-13': '13px', 
      },
      spacing: {
        10: '10px',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar': {
          'scrollbar-width': 'thin', /* for Firefox */
          'scrollbar-color': '#00414A transparent', 
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '4px', /* chrome, edge, safari */
          background: '#00414A',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: '#00414A', 
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: '#00414A', 
          'border-radius': '4px', 
        },
        '.custom-scrollbar::-webkit-scrollbar-button': {
          display: 'none', 
        },
      });
    }),
  ],
}

