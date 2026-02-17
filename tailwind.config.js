/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#14b8a6', // Teal-500
                    hover: '#0d9488',   // Teal-600
                    light: 'rgba(20, 184, 166, 0.1)'
                },
                dark: {
                    bg: '#0b1121',
                    surface: '#151e32',
                    border: '#334155'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
