/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: `gt-super, Georgia, Cambria, Times New Roman, Times, serif`,
        texts: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
      },
      backgroundImage: {
        'hero-img-1': "url('https://www.libertytravel.com/sites/default/files/styles/full_size/public/lt-HP-main-1920x680-BIPOC-owned-travel.jpg?itok=pbtUdq7n')",
        'hero-img-2': "url('https://www.relaxinplayadelcarmen.com/blog/filemanager/media/2023-01-1163be3302baf5e.jpg')",
        'hero-img-3': "url('https://images.squarespace-cdn.com/content/v1/57fbf8c88419c2ee93cbe03e/1507661151953-139YEDGIHRBL9Q05CT2P/Panoramica-Dia%2Cxlarge.1483026236.jpg?format=2500w')",

      }
    },
  },
  plugins: [],
}

