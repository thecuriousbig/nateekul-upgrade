module.exports = {
  mode: 'jit',
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', 'sans-serif'],
        serif: ['"IBM Plex Sans Thai Looped"', 'serif']
      },
      colors: {
        primary: {
          black: '#444444',
          white: '#FFFFFF',
          blue:  '#007FFF'
        },
        secondary: {
          gray: {
            '100': '#DADADA',
            '200': '#B4B4B4',
            '300': '#8F8F8F',
            '400': '#696969',
            '500': '#444444',
            '600': '#363636',
            '700': '#292929',
            '800': '#1B1B1B',
            '900': '#0E0E0E'
          },
          blue: {
            '100': '#498FF2',
            '200': '#007FFF',
            '300': '#0064F0',
            '400': '#0047AB',
            '500': '#224270'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
