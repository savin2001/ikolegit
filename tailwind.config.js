/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=light]"
                    ],
                    primary: "#FF7643",
                    secondary: "#F5F6F9",
                    accent: "#37cdbe",
                    neutral: "#757575",
                    "base-100": "#ffffff",
                },
            },
            "dark",
            "black",
        ],
    },
};
