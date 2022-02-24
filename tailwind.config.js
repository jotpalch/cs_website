module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(34px,-67px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-21px,55px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
