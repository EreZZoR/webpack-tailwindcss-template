module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      screens: {},
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
      textDecoration: ["hover"],
    },
  },
  plugins: [],
};
