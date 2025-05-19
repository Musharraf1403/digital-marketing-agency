/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3B82F6",
        "secondary": "#EC4899",
        "accent": "#E0F2FE",
        "dark": "#1F2937",
        "text": "#374151"
      },
    },
  },
  plugins: [],
}
