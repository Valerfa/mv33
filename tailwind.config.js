/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        whitesoft: "#fbfbfb",
        black: "#0E0F11",
        black2: "#1A1B1E",
        light: "#F0EEED",
        accent: "#00BE7F",
        accent2: "#0183E4",
      },
    },
  },
  plugins: [],
};

