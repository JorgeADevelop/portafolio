/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'bg-main': '#201E22',
          'bg-secondary': '#C972FF',
        },
      },
    },
    plugins: [],
};