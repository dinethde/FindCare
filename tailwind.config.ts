/** @type {import('tailwindcss').Config} */
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
        "backgrounds-main-2": "#F6F8F8",
        lightgray: "#ccc",
        "neutral-colors-black": "#000",
        "colors-grey-2": "#424957",
        white: "#fff",
        "brand-main": "#fa5300",
      },
      spacing: {},
      fontFamily: {
        jura: "Jura",
        "small-text": "'Plus Jakarta Sans'",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      inherit: "inherit",
    },

    borderWidth: {
      thin: "1px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
