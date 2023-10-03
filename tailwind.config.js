/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#70259B',
        'primary-active':'#D100C9',
        'primary-dark': '#430964'
      },
      fontSize:{
        "heading-1": ["48px", "1.4"],
        "heading-2": ["40px", "1.4"],
        "heading-3": ["32px", "1.2"],
        "heading-4": ["24px", "1.2"],
        "subtitle-4": ["24px", "1.2"],
        "subtitle-5": ["20px", "1.5"],
        "body-20": ["20px", "1.5"],
        "body-16": ["16px", "1.5"],
        "body-14": ["14px", "1.5"]
      },
      aspectRatio: {
        '12/5': '12 / 5',
      },
    },
    screens: {
      'mobile-large': '460px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [],
}

