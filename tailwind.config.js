/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#101010",
          700: '#6cc312',
        },
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
      main: {
        "primary": "#6CC312",
        "secondary": "#6cc312",
        "accent": "#1FB2A6",
        "neutral": "#191D24",
        "base-100": "#101010",
        "base-200": "#141414",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
    }
    ],
  },
}
