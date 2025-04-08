// design-tokens/parsed-tokens.js
const tokens = require('./design-tokens'); // Auto-generated file from Style Dictionary

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

// =============
// Parse Colors
function stripCategory(name, category) {
  if (category.toLowerCase() === 'neutral-colors') {
    // Remove "neutral", "neutral colors", "neutral-colors", etc.
    return name.replace(/^(neutral[\s-]*colors)/i, '');
  }
  const regex = new RegExp('^' + category, 'i');
  return name.replace(regex, '');
}

function parseColorCategory(category) {
  if (!tokens[category]) return {};
  return Object.fromEntries(
    Object.entries(tokens[category]).map(([key, token]) => {
      const rawName = token.name || key;
      let stripped = stripCategory(rawName, category).trim();

      if (category.toLowerCase() === 'neutral-colors') {
        // Insert a hyphen between "neutral" and a digit if missing.
        stripped = stripped.replace(/^(neutral)(\d+)/i, '$1-$2');
      }

      if (!stripped) {
        stripped = key;
      }
      const newKey = toKebabCase(stripped).replace(/^-+|-+$/g, '');
      return [newKey, token.value];
    })
  );
}

// Parse each color category.
const backgrounds   = parseColorCategory("Backgrounds");
const colors        = parseColorCategory("Colors");
const color         = parseColorCategory("Color");
const neutralColors = parseColorCategory("Neutral-colors");
const brandColors   = parseColorCategory("Brand-colors");
const supportColors = parseColorCategory("Support-colors");

const allColors = {
  ...backgrounds,
  ...colors,
  ...color,
  ...neutralColors,
  ...brandColors,
  ...supportColors,
};

// ==============
// Parse Strokes (for border widths)
// Assumes strokes are under tokens.Strokes.card.
let strokes = {};
if (tokens.Strokes && tokens.Strokes.card) {
  strokes = Object.fromEntries(
    Object.entries(tokens.Strokes.card).map(([key, token]) => [
      toKebabCase(key),
      token.value + 'px'
    ])
  );
}

// ==============
// Parse Radius (for border radius)
let radius = {};
if (tokens.Radius) {
  radius = Object.fromEntries(
    Object.entries(tokens.Radius).map(([key, token]) => [
      toKebabCase(key),
      token.value + 'px'
    ])
  );
}

// ==============
// Parse Text Styles (full style objects)
// This function processes tokens.textStyles (an array) into an object keyed by style name.
function parseTextStyles() {
  const textStyles = {};
  if (!tokens.textStyles) return textStyles;
  tokens.textStyles.forEach(style => {
    // Use the token name and convert to kebab-case (e.g. "H1" => "h1")
    const key = toKebabCase(style.name).replace(/^-+|-+$/g, '');
    const fontSize = style.fontSize ? `${style.fontSize / 16}rem` : undefined;
    const fontFamily = style.fontFamily || 'sans-serif';
    const fontWeight = style.fontWeight
      ? (() => {
          const lw = style.fontWeight.toLowerCase();
          if (lw === 'bold') return '700';
          if (lw === 'semibold') return '600';
          if (lw === 'medium') return '500';
          if (lw === 'regular') return '400';
          return style.fontWeight;
        })()
      : undefined;
    const letterSpacing = style.letterSpacing && style.letterSpacing.value != null
      ? `${style.letterSpacing.value / 100}em`
      : undefined;
    const lineHeight = style.lineHeight ? `${style.lineHeight / style.fontSize}` : '1.2';
    const textTransform = style.textCase && style.textCase.toLowerCase() === "original"
      ? "none"
      : (style.textCase ? style.textCase.toLowerCase() : undefined);

    textStyles[key] = {
      fontSize,
      fontFamily,
      fontWeight,
      letterSpacing,
      lineHeight,
      textTransform,
    };
  });
  return textStyles;
}

const textStyles = parseTextStyles();
console.log('Parsed neutral colors:', parseColorCategory("Neutral-colors"));

// Export all parsed tokens.
module.exports = {
  colors: allColors,
  strokes,
  radius,
  textStyles,
};
