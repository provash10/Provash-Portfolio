/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Modern Blue
        secondary: '#1e293b', // Dark Slate
        accent: '#7c3aed', // Purple
        success: '#10b981', // Emerald
        warning: '#f59e0b', // Amber
        danger: '#ef4444', // Red
        info: '#06b6d4', // Cyan
        dark: '#0f172a', // Slate 900
        light: '#f8fafc', // Slate 50
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        'gradient-warm': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      },
    },
  },
  plugins: [],
}