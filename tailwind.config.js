const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    aspectRatio: {
      golden: '1.618'  // the golden ratio
    },
    extend: {
      'animation': {
        'text':'text 3s infinite ease-in-out'
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background-size':'200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
        display: ["Bebas Neue Pro ", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "offwhite": "#f8f3ed",
        "offblack": "#020604",
        "uoftbg-purple": {
          // uoftbg branding colours
          "light": "#6440A4",
          "medium": "#4B307B",
          "dark": "#322052",
          "darker": "#1A0F2A",
          "darkest": "#060312",
        },
        "uoftbg-orange": {
          "light": "#D07400",
          "medium": "#A75700",
          "dark": "#703A00"
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [
    require('tailwindcss-opentype'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide')
  ],
  'darkMode': 'class',
}
