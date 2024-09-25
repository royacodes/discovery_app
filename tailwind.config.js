/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#0A2342",
        "deep-purple": "#282C56",
        "neon-green": "#4CAF50",
        "electric-blue": "#00FFFF",
        "silver-color": "#C0C0C0",
        "bold-gold": "#FFD700",
        "gray-sh": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
