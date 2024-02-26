/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-x-45": {
      transform: "rotateX(45deg)",
    },
    ".rotate-x-180": {
      transform: "rotateX(180deg)",
    },
  });
});

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
        xl: "1920px",
      },
      colors: {
        accent: "hsl(0, 0%, 19%)",
        lightGray: "hsl(0, 0%, 60%)",
        opaqueAccent: "hsl(0, 0%, 19%, 0.25)",
        opaqueLight: "hsl(0, 0%, 100%, 0.75)",
        opaqueDark: "hsl(0, 0%, 0%, 0.75)",
      },
      transitionProperty: {
        "all-shadow": "box-shadow, drop-shadow, filter",
        filter: "filter",
        input: "border, color",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.625rem",
          md: "4rem",
          lg: "clamp(10.3125rem, 0.375rem + 11.0417vw, 13.625rem)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "quote-sm": [
          "clamp(0.75rem, 0.3922rem + 1.5267vw, 1.125rem)",
          {
            lineHeight: "1.83",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "quote-md": [
          "1.125rem",
          {
            lineHeight: "1.56",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "quote-lg": [
          "1.125rem",
          {
            lineHeight: "1.56",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "name-sm": [
          "clamp(0.75rem, 0.3922rem + 1.5267vw, 1.125rem)",
          {
            lineHeight: "1.83",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "name-md": [
          "1.125rem",
          {
            lineHeight: "1.55",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "name-lg": [
          "1.125rem",
          {
            lineHeight: "1.55",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "greeting-sm": [
          "clamp(0.9375rem, 0.7586rem + 0.7634vw, 1.125rem)",
          {
            lineHeight: "1.67",
            letterSpacing: "3px",
            fontWeight: "400",
          },
        ],
        "greeting-md": [
          "clamp(1.125rem, 0.9821rem + 0.2976vw, 1.25rem)",
          {
            lineHeight: "1.55",
            letterSpacing: "3.6px",
            fontWeight: "400",
          },
        ],
        "greeting-lg": [
          "1.25rem",
          {
            lineHeight: "1.4",
            letterSpacing: "4px",
            fontWeight: "400",
          },
        ],
        "display-sm": [
          "clamp(6.25rem, 1.7772rem + 19.084vw, 10.9375rem)",
          {
            lineHeight: "1",
            letterSpacing: "-2.5px",
            fontWeight: "700",
          },
        ],
        "display-md": [
          "clamp(10.9375rem, 9.1518rem + 3.7202vw, 12.5rem)",
          {
            lineHeight: "1",
            letterSpacing: "-4.38px",
            fontWeight: "700",
          },
        ],
        "display-lg": [
          "12.5rem",
          {
            lineHeight: "1",
            letterSpacing: "-5px",
            fontWeight: "700",
          },
        ],
        "timezone-sm": [
          "clamp(0.9375rem, -0.0763rem + 4.3257vw, 2rem)",
          {
            lineHeight: "1.87",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "timezone-md": [
          "clamp(2rem, 1.4286rem + 1.1905vw, 2.5rem)",
          {
            lineHeight: "1.14",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "timezone-lg": [
          "2.5rem",
          {
            lineHeight: "1.43",
            letterSpacing: "0",
            fontWeight: "300",
          },
        ],
        "location-sm": [
          "clamp(0.9375rem, 0.7586rem + 0.7634vw, 1.125rem)",
          {
            lineHeight: "1.87",
            letterSpacing: "3px",
            fontWeight: "700",
          },
        ],
        "location-md": [
          "clamp(1.125rem, 0.6964rem + 0.8929vw, 1.5rem)",
          {
            lineHeight: "1.56",
            letterSpacing: "3.6px",
            fontWeight: "700",
          },
        ],
        "location-lg": [
          "1.5rem",
          {
            lineHeight: "1.17",
            letterSpacing: "4.8px",
            fontWeight: "700",
          },
        ],
        "button-sm": [
          "clamp(0.75rem, 0.5115rem + 1.0178vw, 1rem)",
          {
            lineHeight: "1.17",
            letterSpacing: "3.75px",
            fontWeight: "700",
          },
        ],
        "button-md": [
          "1rem",
          {
            lineHeight: "0.57",
            letterSpacing: "5px",
            fontWeight: "700",
          },
        ],
        "button-lg": [
          "1rem",
          {
            lineHeight: "1.75",
            letterSpacing: "5px",
            fontWeight: "700",
          },
        ],
        "label-sm": [
          "clamp(0.625rem, 0.4461rem + 0.7634vw, 0.8125rem)",
          {
            lineHeight: "2.8",
            letterSpacing: "2px",
            fontWeight: "400",
          },
        ],
        "label-md": [
          "clamp(0.8125rem, 0.6696rem + 0.2976vw, 0.9375rem)",
          {
            lineHeight: "0.46",
            letterSpacing: "2.6px",
            fontWeight: "400",
          },
        ],
        "label-lg": [
          "0.9375rem",
          {
            lineHeight: "0.88",
            letterSpacing: "3px",
            fontWeight: "400",
          },
        ],
        "info-sm": [
          "clamp(1.25rem, 0.0573rem + 5.0891vw, 2.5rem)",
          {
            lineHeight: "auto",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "info-md": [
          "clamp(2.5rem, 1.3571rem + 2.381vw, 3.5rem)",
          {
            lineHeight: "auto",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
        "info-lg": [
          "3.5rem",
          {
            lineHeight: "auto",
            letterSpacing: "0",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [rotateX],
};

// Font Sizes (px)
// Element   :   Desktop, Tablet, Mobile
// Quote     :   18     , 18    , 12
// Name      :   18     , 18    , 12
// Greeting  :   20     , 18    , 15
// Display   :   200    , 175   , 100
// Timezone  :   40     , 32    , 15
// Location  :   24     , 18    , 15
// Button    :   16     , 16    , 12
// Label     :   15     , 13    , 10
// Info      :   56     , 40    , 20

// Line Height
// Element   :   Desktop, Tablet, Mobile
// Quote     :   28     , 28    , 22
// Name      :   28     , 28    , 22
// Greeting  :   28     , 28    , 25
// Display   :   200    , 175   , 100
// Timezone  :   28     , 28    , 28
// Location  :   28     , 28    , 28
// Button    :   28     , 28    , 14
// Label     :   17     , 28    , 28
// Info      :   auto   , auto  , auto

// Letter Spacing
// Element   :   Desktop, Tablet, Mobile
// Quote     :   0      , 0     , 0
// Name      :   0      , 0     , 0
// Greeting  :   4      , 3.6   , 3
// Display   :   -5     , -4.38 , -2.5
// Timezone  :   0      , 0     , 0
// Location  :   4.8    , 3.6   , 3
// Button    :   5      , 5     , 3.75
// Label     :   3      , 2.6   , 2
// Info      :   0      , 0     , 0

// Font Weights
// Element   :   Desktop, Tablet, Mobile
// Quote     :   Reg    , Reg   , Reg
// Name      :   Bold   , Bold  , Bold
// Greeting  :   Reg    , Reg   , Reg
// Display   :   Bold   , Bold  , Bold
// Timezone  :   Light  , Light , Light
// Location  :   Bold   , Bold  , Bold
// Button    :   Bold   , Bold  , Bold
// Label     :   Reg    , Reg   , Reg
// Info      :   Bold   , Bold  , Bold
