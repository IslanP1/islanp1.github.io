/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1215',
        surface: '#132026',
        'surface-soft': '#1b2d35',
        text: '#e8f0f2',
        muted: '#9fb2b9',
        accent: '#ff8a3d',
        mint: '#29d3a7',
      },
      fontFamily: {
        title: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(9, 16, 19, 0.45)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}

