/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      screens :{
        xsm:"250px",
        sm :"480px",
        md:"768px",
        lg:"1024px",
        xl:"1536px"
      },
      colors :{
        primaryColor :"#eb456a",
        secondaryColor : "#31295e"
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        custom: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      }
    },
  },
  plugins: [],
}

