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
  addUtilities(utilities);
});

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
            ...colors
  	},
  	extend: {
  		borderWidth: {
                ...strokes,
  			thin: '1px'
  		},
  		borderRadius: {
                ...radius,
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			jura: 'jura',
  			'plus-jakarta-sans': 'Plus Jakarta Sans'
  		},
  		backgroundColor: {
                ...colors
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [textStylesPlugin, require("tailwindcss-animate")],
};

export default config;
