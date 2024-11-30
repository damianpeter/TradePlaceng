/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm : '480px',
      md : '768px',
      lg : '1020px',
      xl : '1440px',
    },
    extend: {
      colors:{
        softBlue : 'hsl(36.48,92.56%,57.84%)',
        SoftBlue : 'hsl(0, 94%, 66%)',
        grayishBlue : 'hsl(229, 8%, 60%)',
        veryDarkBlue : 'hsl(229, 31%, 21%)',
      },

      fontFamily:{
        sans:['Rubik', 'sans-serif']
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')"
      })
    },
  },
  plugins: [],
}

