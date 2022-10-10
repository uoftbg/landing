/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
          "dark": "#703A00",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [
    require('tailwindcss-opentype'),
  ],
  'darkMode': 'class',
}
