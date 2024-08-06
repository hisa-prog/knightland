const filters = require("tailwindcss-filters");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: {
        standard: [
          /^[\w:]*col-start-/,
          /^[\w:]*row-start-/
        ]
      }
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url('/common/footer.svg')",
        'footer-mobile': "url('/common/footer-mobile.svg')",
      },
      fontSize: {
        '52px': '52px'
      },
      maxWidth: {
        mobile: "375px",
        "8xl": "1440px",
      },
      width: {
        "120p": "120%",
        "110p": "110%"
      },
      colors: {
        mobile: '#040B17',
        main: '#0D1420',
      },
      zIndex: {
        1: '1'
      },
      keyframes: {
        levitate: {
          '0%': {
            transform: 'translate3d(0, 0, 0)'
          },
          '100%': {
            transform: 'translate3d(0, 5px, 0)'
          },
        },
        scalecard: {
          '0%': {
            transform: 'scale(1.0)'
          },
          '100%': {
            transform: 'scale(1.2)'
          },
        }
      },
      animation: {
        levitate: 'levitate 3s linear alternate infinite',
        levitate2: 'levitate 2.6s linear alternate infinite',
        levitate3: 'levitate 2.4s linear alternate infinite',
        scalecard: "scalecard 1s linear"
      }
    },
    screens: {
      ...defaultTheme.screens,
      xxl: "1440px",
      '2xl': "1536px",
      '3xl': "1880px",
      huge: "1921px",
      '5xl': "2500px",
    },
  },
  variants: {
    extend: {
      height: ["hover"],
      zIndex: ["hover"]
    },
  },
  plugins: [filters],
};
