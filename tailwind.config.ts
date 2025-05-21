import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(function({ addUtilities }: { addUtilities: (utilities: Record<string, any>, options?: { variants?: string[] }) => void }) {
      const newUtilities = {
        '.scrollbar-thin':{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(31 29 29) black'
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: 'white'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(31 41 55)',
            borderRadius: '20px',
            border: '1px solid white'
          }
        }
      };

      addUtilities(newUtilities, { variants: ['responsive', 'hover'] });
    }),
  ],
};
export default config;
