/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#cdcfc1",
                secondary: "#423f32",
                dimWhite: "rgba(255, 255, 255, 0.7)",
                dimBlue: "rgba(9, 151, 124, 0.1)",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                reborn: ["reborn", "sans-serif"],
                baloo: ['Baloo 2', "cursive"],
                garamond: ['Cormorant Garamond', "normal"]
            },
        },
        screens: {
            xs: "380px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};