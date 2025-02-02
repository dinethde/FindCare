// tailwind.config.ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import {
  colors,
  strokes,
  radius,
  textStyles,
} from "./design-tokens/prased-tokens";

const textStylesPlugin = plugin(function ({ addUtilities }) {
  const utilities: Record<string, any> = {};
  Object.entries(textStyles).forEach(([key, style]) => {
    utilities[`.text-${key}`] = {
      ...(style.fontSize && { fontSize: style.fontSize }),
      ...(style.fontFamily && { fontFamily: style.fontFamily }),
      ...(style.fontWeight && { fontWeight: style.fontWeight }),
      ...(style.letterSpacing && { letterSpacing: style.letterSpacing }),
      ...(style.lineHeight && { lineHeight: style.lineHeight }),
      ...(style.textTransform && { textTransform: style.textTransform }),
    };
  });
  // Note: No variants are specified as Tailwind v3 makes them responsive automatically.
  addUtilities(utilities, { respectPrefix: true, respectImportant: true });
});

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      borderWidth: {
        ...strokes,
        thin: "1px",
      },
      borderRadius: {
        ...radius,
      },
      fontFamily: {
        jura: "jura",
      },
      backgroundColor: {
        ...colors,
      },
    },
  },
  plugins: [textStylesPlugin],
}

export default config;
