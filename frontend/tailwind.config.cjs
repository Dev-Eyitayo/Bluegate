module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontSize: {
        'xsm': '0.825rem',
      },
      fontFamily: {
        sans: ['"Noto Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', '"Noto Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dcebfd',
          200: '#c1dcfc',
          300: '#96c6fa',
          400: '#64a7f5',
          500: '#3f85f0',
          600: '#2966e4',
          700: '#2151d1',
          800: '#2043aa',
          900: '#203c86',
          950: '#182752',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgb(24 39 82 / 0.05), 0 4px 16px -4px rgb(24 39 82 / 0.08)',
        lift: '0 2px 4px rgb(24 39 82 / 0.05), 0 12px 28px -8px rgb(24 39 82 / 0.14)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.22s ease-out both',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
