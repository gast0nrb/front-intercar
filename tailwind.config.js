/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'xl' : '1335px',
      'lg' : '850px',
      'md' : '400px'
    },
    extend: {},
  },
  plugins: [],
}
