/** @type {import('tailwindcss').Config} */
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
      ...colors, // This should contain keys like "main", "neutral-1", "neutral-2", etc.
    },
    extend: {
      borderWidth: {
        ...strokes,
      },
      borderRadius: {
        ...radius,
      },
    },
  },
  plugins: [textStylesPlugin],
};

export default config;

// "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
// import type { Config } from "tailwindcss";
// import plugin from "tailwindcss/plugin";
// import {
//   colors,
//   strokes,
//   radius,
//   textStyles,
// } from "./design-tokens/prased-tokens";
// const textStylesPlugin = plugin(function ({ addUtilities }) {
//   const utilities: Record<string, any> = {};
//   Object.entries(textStyles).forEach(([key, style]) => {
//     utilities[`.text-${key}`] = {
//       ...(style.fontSize && { fontSize: style.fontSize }),
//       ...(style.fontFamily && { fontFamily: style.fontFamily }),
//       ...(style.fontWeight && { fontWeight: style.fontWeight }),
//       ...(style.letterSpacing && { letterSpacing: style.letterSpacing }),
//       ...(style.lineHeight && { lineHeight: style.lineHeight }),
//       ...(style.textTransform && { textTransform: style.textTransform }),
//     };
//   });
//   // Note: use an options object with the "variants" property
//   addUtilities(utilities, { respectPrefix: true, respectImportant: true });
// });

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         ...colors,
//       },
//       borderWidth: {
//         ...strokes,
//       },
//       borderRadius: {
//         ...radius,
//       },
//     },
//   },
//   plugins: [textStylesPlugin],
// };

// export default config;
