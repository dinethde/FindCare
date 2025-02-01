/** @type {import('tailwindcss').Config} */
const {
  colors,
  fontSize,
  fontFamily,
} = require("./design-tokens/prased-tokens");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      // Extend font sizes from your text styles (e.g. "h1" becomes available as text-h1)
      fontSize: {
        ...fontSize,
      },
      // Extend font families so you can use classes like font-h1 (if you choose to map them that way)
      fontFamily: {
        ...fontFamily,
        jura: "jura",
      },
    },

    borderWidth: {
      thin: "1px",
    },

    backgroundColor: {
      ...colors,
    },
  },
  corePlugins: {
    preflight: false,
  },
};
