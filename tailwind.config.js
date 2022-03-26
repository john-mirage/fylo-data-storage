const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "gradient-from": "hsl(6, 100%, 80%)",
      "gradient-to": "hsl(335, 100%, 65%)",
      "pale-blue": "hsl(243, 100%, 93%)",
      "grayish-blue": "hsl(229, 7%, 55%)",
      "dark-blue": "hsl(228, 56%, 26%)",
      "very-dark-blue": "hsl(229, 57%, 11%)",
      "icons": "#697ED4",
    },
    fontFamily: {
      sans: [
        'Raleway',
        ...defaultTheme.fontFamily.sans,
      ]
    },
    extend: {
      spacing: {
        "gap": "1.5625rem",
      },
    },
  },
  plugins: [],
}
