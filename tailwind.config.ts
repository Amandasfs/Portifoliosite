import type { Config } from "tailwindcss";
import colors from './src/styles/colors';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: colors.background,
        text: colors.text,
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        border: colors.border,
        muted: colors.muted,
      },
    },
  },
  plugins: [],
};

export default config;
