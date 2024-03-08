import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-to-tr': 'radial-gradient(circle farthest-corner at top right, var(--tw-gradient-stops))',
      }),
      textColor: {
        'gradient': 'transparent',
      },
    },
  },
  variants: {
    extend: {
      scale: ['focus'],
    },
  },
  plugins: [
    nextui(),
    require('@tailwindcss/typography'),
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        '.text-gradient': {
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
export default config;
