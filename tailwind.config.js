/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': "linear-gradient(180deg, rgba(0, 48, 179, 0.2) 0%, rgba(153, 202, 60, 0.2) 100%)",
    },
    },
  },
  plugins: [],
}

