import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0a0a1a',
          card: '#0f0f2e',
          border: '#1e1e3f',
        },
      },
    },
  },
  plugins: [],
};

export default config;
