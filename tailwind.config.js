import colors from "tailwindcss/colors.js";

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
                    DEFAULT: colors.neutral[200],
                    dark: colors.neutral[800],
                },
                blue: {
                    DEFAULT: colors.blue[500],
                    dark: colors.blue[700],
                },
            }
        },
    },
    plugins: [],
}