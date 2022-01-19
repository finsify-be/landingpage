/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require('tailwindcss/plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './build/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: () => ({
        'git-hub': "url('/img/git-hub.svg')",
        telegram: "url('/img/telegram.svg')",
        twiter: "url('/img/twiter.svg')",
        youtube: "url('/img/youtube.svg')",
        menu: "url('/img/menu.svg')",
        close: "url('/img/close.svg')",
        time: "url('/img/job-icons/time.png')",
        money: "url('/img/job-icons/money.png')",
        place: "url('/img/job-icons/place.png')",
      }),
      screens: {
        mxs: '360px',
        xs: '425px',
        ...defaultTheme.screens,
      },
      container: {
        padding: {
          mxs: '16px',
          xs: '16px',
          sm: '16px',
          md: '24px',
          lg: '32px',
          xl: '160px',
          '2xl': '288px',
        },
      },
      spacing: {
        3: '0.75rem',
        18: '4.5rem',
        21: '5.25rem',
        22: '5.5rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        34: '8.5rem',
        42: '9.5rem',
        43: '9.75rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
        88: '22rem',
        97: '25rem',
        98: '26rem',
        100: '28rem',
        108: '30rem',
      },
      height: {
        fit: 'fit-content',
      },
      width: {
        '56px': '56px',
        '164px': '164px',
      },
      padding: {
        56: '56px',
      },
    },
    minWidth: {
      '32px': '32px',
    },
    maxWidth: {
      '970px': '970px',
    },
    maxHeight: {
      '140px': '140px',
      '256px': '256px',
    },
    colors: {
      transparent: 'transparent',
      blue: {
        default: '#007fff',
        shade: '#006cd8',
        'medium-tint': '#3399ff',
        'light-tint': '#e5f2ff',
        'ultralight-tint': '#e5f2ff',
      },
      monochrome: {
        bg: '#f9fdfc',
        light: '#F0FDF8',
        black: '#1b191b',
        white: '#ffffff',
        default: '#687481',
        shade: '#58626d',
        'dark-tint': '#a4acb3',
        'medium-tint': '#F5F5F5',
        'light-tint': '#f8f9fb',
      },
      green: {
        light: '#D5F0DF',
        ml: '#2DB84C',
        default: '#00b602',
        shade: '#009402',
        'medium-tint': '#33c535',
        'light-tint': '#e5f7e5',
        success: '#18D09B',
      },
      red: {
        default: '#ee0000',
        shade: '#cc0000',
        'medium-tint': '#f13333',
        'light-tint': '#fccccc',
        'ultralight-tint': '#fde5e5',
      },
      yellow: {
        default: '#ffdd00',
        shade: '#ebcb00',
        'medium-tint': '#ffe74c',
        'light-tint': '#fffbe5',
      },
      orange: {
        default: '#f5a623',
        shade: '#dc931b',
        'medium-tint': '#f7b84f',
        'light-tint': '#fef6e9',
      },
      'data-visualization': {
        'scrollbar-thumb': '#ccd0db',
        coverage: '#62adfc',
        overlapping: '#4f8ac9',
        'scope-cover': '#aed4fd',
        'saved-time': '#67d5b5',
        auto: '#d599ff',
        manual: '#88e2f3',
      },
      dark: {
        brown: '#555555',
        tiny: '#333333',
      },
    },
    fontFamily: {
      ibm: ['IBM Plex Sans', 'sans-serif'],
      bold: ['OpenSans-Semibold', 'sans-serif'],
      regular: ['OpenSans', 'sans-serif'],
    },
    fontSize: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      36: '36px',
      40: '40px',
      48: '48px',
      64: '64px',
    },
    lineHeight: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      38: '38px',
      40: '40px',
      48: '48px',
      52: '52px',
      83: '83px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.link': {
          backgroundColor: 'transparent',
          color: '#007fff',
          cursor: 'pointer',
        },
        '.link:hover': {
          color: '#3399ff',
        },
        '.link:active': {
          color: '#006cd8',
        },
        '.text-ellipsis': {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        '.gray-link': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 'normal',
          color: '#687481',
        },
        '.gray-link:hover': {
          color: '#687481',
          textDecorationLine: 'underline',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
  corePlugins: {
    container: false,
  },
};
