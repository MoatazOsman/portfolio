/** @type {import('tailwindcss').Config} */
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        "red-surface": "#9C3068",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        mist: "#C4D2E8",
        navy: "#0B1238",
      },
      backgroundImage: {
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        sila: `url('${basePath}/assets/sila.webp')`,
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        opensans: ["var(--font-opensans)", "sans-serif"],
      },
      content: {
        brush: `url('${basePath}/assets/brush.png')`,
        person1: `url('${basePath}/assets/person-1.png')`,
        person2: `url('${basePath}/assets/person-2.png')`,
        person3: `url('${basePath}/assets/person-3.png')`,
      },
      boxShadow: {
        "3xl": "2px 8px 18px rgb(253 204 73 / 0.35)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
