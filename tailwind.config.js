module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fancy: ["Dancing Script"],
        josefin: ["Josefin Sans"]
      },
      // animation: {
      //   fade: "fadeIn 5s ease-in"
      // },
      // keyframes: theme => ({
      //   fadeOut: {
      //     '0%': { backgroundColor: theme('colors.red.300') },
      //     '100%': { backgroundColor: theme('colors.transparent') },
      //   },
      // }),
    },
  },
  plugins: [],
}
