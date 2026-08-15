/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f0ff',
          500: '#6a5acd',
          700: '#483d8b',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          700: '#404040',
          900: '#171717',
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        success: '#22c55e',
        error: '#ef4444',
      },
    },
  },
  plugins: [],
}

