/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: `gt-super, Georgia, Cambria, Times New Roman, Times, serif`,
        texts: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
      }
    },
  },
  plugins: [],
}

