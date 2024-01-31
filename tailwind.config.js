/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // sample: [text-color, font-size, font-weight, line-height, letter-spacing, font-family]
      base: [
        "var(--text-color)",
        "var(--p-font-size)",
        "var(--p-font-weight)",
        "var(--p-font-height)",
        "var(--p-font-spacing)",
        "var(--body-font-family)",
      ],
      lg: [
        "var(--text-color)",
        "var(--p-large-font-size)",
        "var(--p-large-font-weight)",
        "var(--p-large-font-height)",
        "var(--p-large-font-spacing)",
        "var(--body-font-family)",
      ],
      xl: [
        "var(--white-color)",
        "var(--h6-font-size)",
        "var(--h6-font-weight)",
        "var(--h6-line-height)",
        "var(--h6-letter-spacing)",
        "var(--heading-font-family)",
      ],
      "2xl": [
        "var(--white-color)",
        "var(--h5-font-size)",
        "var(--h5-font-weight)",
        "var(--h5-line-height)",
        "var(--h5-letter-spacing)",
        "var(--heading-font-family)",
      ],
      "3xl": [
        "var(--white-color)",
        "var(--h4-font-size)",
        "var(--h4-font-weight)",
        "var(--h4-line-height)",
        "var(--h4-letter-spacing)",
        "var(--heading-font-family)",
      ],
      "4xl": [
        "var(--white-color)",
        "var(--h3-font-size)",
        "var(--h3-font-weight)",
        "var(--h3-line-height)",
        "var(--h3-letter-spacing)",
        "var(--heading-font-family)",
      ],
      "5xl": [
        "var(--white-color)",
        "var(--h2-font-size)",
        "var(--h2-font-weight)",
        "var(--h2-line-height)",
        "var(--h2-letter-spacing)",
        "var(--heading-font-family)",
      ],
      "6xl": [
        "var(--white-color)",
        "var(--h1-font-size)",
        "var(--h1-font-weight)",
        "var(--h1-line-height)",
        "var(--h1-letter-spacing)",
        "var(--heading-font-family)",
      ],

    },
  },
  plugins: [],
}