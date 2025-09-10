/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{html,js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      brand: "#1DA1F2",
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      poppins:['Poppins', 'sans-serif'],
      display: ['Playfair Display', 'serif'],
    },
  },
};
export const plugins = [
 
];
