/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode:"class",
  theme: {
    fontFamily: {
      sans:["ui-sans-serif","system-ui"],
      'Kaushan': ['Kaushan Script'],

    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // ...
        green: {
          DEFAULT: '#00f260',
        },
        // ...
      },
    },
  },
  plugins: [],
}
