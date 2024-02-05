/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/src/assets/portfolio/auckland-night5.jpg')",
      },
    },
    fontFamily: {
      signature1: ["Great Vibes"],
      signature2: ["Autography"],
      signature3: ["Arthemis"],
      robotoSlab: ["Roboto Slab"],
      raleway: ["Raleway"],
    }
  },
  plugins: [],
};
