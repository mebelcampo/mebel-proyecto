/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "regal-blue":'#243c5a',
        "primary": '#8e44ad',
        "secundary": '#b03a2e'
      }
    },
  },
  plugins: [],
}

