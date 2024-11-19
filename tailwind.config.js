/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-overlay": "rgba(59, 130, 246, 0.5)", 
      },
      backgroundImage: {
        cover: 'url("/src/assets/cover.jpg")',
      },
    },
  },
  plugins: [require("daisyui")],
};

