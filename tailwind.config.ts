import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: '#fafaf9',
        contactbtn: '#262626',
        offwhitetxt: '#e8e8e3',
        darkgrey: '#8c8c73',
        secondarytxt: '#aeae9d',
        offblack: '#0e0e0c',
        offblacktxt: '#262626',
        abouttxt: '#d1d1c7'
      }
    },
  },
  plugins: [],
}
export default config
