import { colors } from "./src/styles/colors"
import { fontFamily } from "./src/styles/fontFamily"

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: { colors, fontFamily },
        borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            DEFAULT: '4px',
            'md': '0.375rem',
            'lg': '0.5rem',
            'full': '9999px',
            'large': '50px',
            'medium': '25px'
        },

    },
    plugins: [],
}