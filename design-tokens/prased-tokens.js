// design-tokens/parsed-tokens.js
const tokens = require('./design-tokens'); // Your auto-generated tokens file

// Helper: Convert a token key to a Tailwind-friendly key
function formatKey(key) {
  return key.toLowerCase().replace(/\s+/g, '-');
}

// Helper: Parse a color category from the tokens file
function parseColorCategory(category) {
  if (!tokens[category]) return {};
  return Object.fromEntries(
    Object.entries(tokens[category]).map(([key, token]) => [
      formatKey(key),
      token.value,
    ])
  );
}

// Parse each color category
const backgrounds = parseColorCategory("Backgrounds");
const colors = parseColorCategory("Colors");
const color = parseColorCategory("Color");
const neutralColors = parseColorCategory("Neutral-colors");
const brandColors = parseColorCategory("Brand-colors");
const supportColors = parseColorCategory("Support-colors");

// Merge all color objects into one
const allColors = {
  ...backgrounds,
  ...colors,
  ...color,
  ...neutralColors,
  ...brandColors,
  ...supportColors,
};

// ---
// Process Text Styles (which come as an array)
function parseTextStyles() {
  if (!tokens.textStyles) return { fontSize: {}, fontFamily: {}, fontWeight: {}, letterSpacing: {} };
  const fontSize = {};
  const fontFamily = {};
  const fontWeight = {};
  const letterSpacing = {};

  tokens.textStyles.forEach(style => {
    // Use the style name as key (e.g. "H1" becomes "h1")
    const key = formatKey(style.name);
    // Convert fontSize from px to rem (assuming 16px base)
    fontSize[key] = `${style.fontSize / 16}rem`;
    // Directly use the fontFamily
    fontFamily[key] = style.fontFamily;
    // Capture fontWeight (as provided)
    fontWeight[key] = style.fontWeight;
    // Convert letterSpacing percent to em (divide by 100)
    letterSpacing[key] = `${style.letterSpacing.value / 100}em`;
  });

  return { fontSize, fontFamily, fontWeight, letterSpacing };
}

const { fontSize, fontFamily, fontWeight, letterSpacing } = parseTextStyles();

// Export the parsed tokens for Tailwind configuration
module.exports = {
  colors: allColors,
  fontSize,
  fontFamily,
  fontWeight,      // Optional – if you want to use it in your config
  letterSpacing,   // Optional – you can extend Tailwind's spacing or letterSpacing if desired
};
