/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent': '#0917de',
        'accent-dark': '#2980b9',
        'red' : '#bf0202',
        'red-dark': '#8f0101'
      },
    },
  },
  plugins: [],
}