/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '480px',
      // mobile phone
      // => @media (min-width: 480px) { ... }

      md: '768px',
      // tablet
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // laptop and desktop
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      gridColumn: {
        'span-20': 'span 20 / span 20',
      },
      gridTemplateColumns: {
        // for sidebar layout
        sidebar: '300px auto',
        // for collapsed sidebar layout
        'sidebar-collapsed': '0px auto',
      },
    },
  },
  plugins: [],
}
