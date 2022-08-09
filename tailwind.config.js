/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                eina: ["Eina", "sans-serif"],
            },
            colors: {
                "black-primary": "#001e2f",
                "gray-primary": "#e6f1f8",
                "purple-primary": "#6b5aed",
                "purple-primary-offset": "#5643ea",
            },
            fontSize: {
                banner: [
                    "2.625rem",
                    {
                        lineHeight: "3.125rem",
                    },
                ],
                "banner-md": [
                    "5.125rem",
                    {
                        lineHeight: "6.125rem",
                    },
                ],
                "banner-desc": [
                    "1.313rem",
                    {
                        lineHeight: "2.125rem",
                    },
                ],
                "banner-desc-md": [
                    "1.625rem",
                    {
                        lineHeight: "2.625rem",
                    },
                ],
            },
        },
    },
    plugins: [],
};
