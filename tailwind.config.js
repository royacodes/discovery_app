/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "top-only": "0 -1px 30px rgba(255, 255, 255, 0.9)",
        "bottom-nav-shadow": "0 -1px 5px rgba(255, 255, 255, 0.9)",
      },

      keyframes: {
        rotateHorizontal: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        "rotate-horizontal": "rotateHorizontal 20s linear infinite",
      },
      colors: {
        "deep-blue": "#0A2342",
        "deep-purple": "#282C56",
        "neon-green": "#4CAF50",
        "electric-blue": "#00FFFF",
        "silver-color": "#C0C0C0",
        "bold-gold": "#FFD700",
        "gray-sh": "#F5F5F5",
        "primary-color": "#45AAB8",
        "ton-blue": "#0098EA",
        "tron-red": "#FF0013",
      },
    },
  },
  plugins: [],
};
