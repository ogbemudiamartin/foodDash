/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    selection:{
      "display":"none",
      "sad-blue":{
        100:"#fff",
        200:"#000"
      }
    }
    },
  },
  plugins: [],
}