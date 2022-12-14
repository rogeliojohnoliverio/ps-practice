/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        inter: 'Inter, sans-serif'
      },
      keyframes: {
        'fade-in': {
          '0%, 100%': {
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          }
        },
        'fade-out': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 10s ease-in-out infinite',
        'fade-out': 'fade-out 10s ease-in-out infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')]
}
