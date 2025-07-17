/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // to cover your src/app structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#54b435', // your brand green
      },
    },
  },
  plugins: [],
}
