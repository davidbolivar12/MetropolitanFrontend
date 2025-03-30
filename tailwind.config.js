/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#131313",
                light: "#f5f5f5",
                violet: "#7e00f3",
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'], // Usa Montserrat como fuente predeterminada
            },
            fontWeight: {
                normal: 400, // Regular
                medium: 500, // Medium
                semibold: 600, // SemiBold
            },
            boxShadow: {
                'smallV': '0 4px 6px -1px rgba(126, 0, 243, 0.2), 0 2px 4px -1px rgba(126, 0, 243, 0.06)',
                'largeV': '0 10px 15px -3px rgba(126, 0, 243, 0.3), 0 4px 6px -2px rgba(126, 0, 243, 0.1)',
              },
        },
    },
    plugins: [],
};