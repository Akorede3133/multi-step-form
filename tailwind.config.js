/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./src/images/bg-sidebar-mobile.svg')",
        'desktop': "url('./src/images/bg-sidebar-desktop.svg')"
      },
      colors: {
        primary: {
          'marine-blue': "hsl(213, 96%, 18%)",
          'purpish-blue': 'hsl(243, 100%, 62%)',
          'pastel-blue': 'hsl(228, 100%, 84%)',
          'light-blue': 'hsl(206, 94%, 87%)',
          'strawberry-blue': 'hsl(354, 84%, 57%)'
        },
        neutral: {
          'cool-gray': 'hsl(231, 11%, 63%)',
          'light-gray': 'hsl(229, 24%, 87%)',
          'magnolia': 'hsl(217, 100%, 97%)',
          'alabaster': 'hsl(231, 100%, 99%)',
        }

      },
    },
  },
  plugins: [],
}