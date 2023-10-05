/** @type {import('tailwindcss').Config} */
const { fontFamily } = require( 'tailwindcss/defaultTheme' );

const plugin = require( 'tailwindcss/plugin' );

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", ...fontFamily.sans],
        monument: ["var(--font-monument)", ...fontFamily.sans],
      },
      colors: {
        dark: "#191932",
        light: "#d9d9d9",
        primary: "#191932",
        primaryDark: "#ffffff",
        hospitalBlue: "#1469ff",
        transition: "#008080",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#d9d9d9 5px,#d9d9d9 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#191932 8px,#191932 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#d9d9d9 5px,#d9d9d9 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#191932 8px,#191932 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#d9d9d9 5px,#d9d9d9 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#191932 8px,#191932 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#d9d9d9 5px,#d9d9d9 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#191932 8px,#191932 40px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },

      xs: { max: "479px" },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": {
          "text-shadow":
            "-1px 1px 0px #51516A, 1px 1px 0 #51516A, 1px 1px 0 #51516A, 1px 1px 0 #51516A",
        },
        ".text-shadow-md": {
          "text-shadow":
            "-2px 2px 0px #51516A, 2px 2px 0 #51516A, 2px 2px 0 #51516A, 2px 2px 0 #51516A",
        },
        ".text-shadow-lg": {
          "text-shadow":
            "-4px 4px 0px #51516A, 4px 4px 0 #51516A, 4px 4px 0 #51516A, 4px 4px 0 #51516A",
        },
        ".text-stroke-light": {
          "-webkit-text-stroke-width": "1.06996px",
          "-webkit-text-stroke-color": "#191932",
        },
        ".text-stroke-dark": {
          "-webkit-text-stroke-width": "1.06996px",
          "-webkit-text-stroke-color": "#d9d9d9",
        },
      });
    }),
  ],
};

