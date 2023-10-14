/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#00ff9f",
                
        "secondary": "#FBC6E3",
                
        "accent": "#11E470",
                
        "neutral": "#141a1f",
                
        "base-100": "#f9f5a3",
                
        "info": "#4399df",
                
        "success": "#58dfae",
                
        "warning": "#fba004",
                
        "error": "#f63c52",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
}

