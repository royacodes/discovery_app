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
        "bg-color": "#121212",
        "metal-gray": "#1F1F1F",
        "slate-gray": "#2E2E2E",
        "dark-slate": "#333333",
      },
      fontFamily: {
        poppinsBlack: ["poppinsBlack Font", "fallbackFont"],
        poppinsBlackItalic: ["poppinsBlackItalic Font", "fallbackFont"],
        poppinsBold: ["poppinsBold Font", "fallbackFont"],
        poppinsBoldItalic: ["poppinsBoldItalic Font", "fallbackFont"],
        poppinsExtraBold: ["poppinsExtraBold Font", "fallbackFont"],
        poppinsExtraBoldItalic: ["poppinsExtraBoldItalic Font", "fallbackFont"],
        poppinsExtraLight: ["poppinsExtraLight Font", "fallbackFont"],
        poppinsExtraLightItalic: [
          "poppinsExtraLightItalic Font",
          "fallbackFont",
        ],
        poppinsItalic: ["poppinsItalic Font", "fallbackFont"],
        poppinsLight: ["poppinsLight Font", "fallbackFont"],
        poppinsLightItalic: ["poppinsLightItalic Font", "fallbackFont"],
        poppinsMedium: ["poppinsMedium Font", "fallbackFont"],
        poppinsMediumItalic: ["poppinsMediumItalic Font", "fallbackFont"],
        poppinsRegular: ["poppinsRegular Font", "fallbackFont"],
        poppinsSemiBold: ["poppinsSemiBold Font", "fallbackFont"],
        poppinsSemiBoldItalic: ["poppinsSemiBoldItalic Font", "fallbackFont"],
        poppinsThin: ["poppinsThin Font", "fallbackFont"],
        poppinsThinItalic: ["poppinsThinItalic Font", "fallbackFont"],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
