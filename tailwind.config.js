/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'bg_dark': 'rgb(29,32,33)',
      'bg_dark_secondary': 'rgb(38,40,41)',
      'bg_light': 'rgb(255,255,255)',
      'bg_light_secondary': 'rgb(245,245,245)',
      'text_dark': 'rgb(221,221,221)',
      'text-light': 'rgb(39,39,39)',
      'line-dark': 'rgb(64,64,64)',
      'line-light': 'rgb(229,229,229)',
      'button-dark': 'rgb(86,88,89)',
      'button-light': 'rgb(255,255,255)',
      'button-active-dark': 'rgb(111,112,113)',
      'button-active-light': 'rgb(240,240,240)',
      'block-dark': 'rgba(86,88,89,0.5)',
      'block-light': 'rgba(210,210,210,0.7)',
      'timeline': 'rgba(255,0,0,0.7)'
    },
    extend: {},
  },
  plugins: [],
}

