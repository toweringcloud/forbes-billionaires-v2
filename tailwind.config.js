/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'abb-blue': '#3196FF',
      'abb-gray': '#424242',
      'abb-neutral': '#A3A3A3',
      'abb-stone': '#FAFAFA',
      'abb-white': '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}
