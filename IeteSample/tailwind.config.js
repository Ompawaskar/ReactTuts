/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
        anime0:"anime0 3s linear 800ms infinite alternate none running",
        anime1:"anime1 3s linear 800ms infinite alternate none running",
        anime2:"anime2 3s linear 800ms infinite alternate none running",
        anime3:"anime3 3s linear 800ms infinite alternate none running",
        anime4:"anime4 3s linear 800ms infinite alternate none running",
        anime5:"anime5 3s linear 800ms infinite alternate none running",
        anime6:"anime6 3s linear 800ms infinite alternate none running",
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 12px))' },
        },
        anime0:{
          '0%':{
              transform: 'translateY(12px)'
          },
          '100%':{
              transform: 'translateY(-3px)'
          }
      },
      anime1:{
        '0%':{
          transform: 'translateY(-2px)'
      },
      '100%':{
          transform: 'translateY(1px)'
      }
    },
      anime2:{
        '0%':{
          transform: 'translateY(7px)'
      },
      '100%':{
          transform: 'translateY(-1px)'
      }
      },
      anime3:{
        '0%':{
          transform: 'translateY(-7px)'
      },
      '100%':{
          transform: 'translateY(12px)'
      }
      },
      anime4:{
        '0%':{
          transform: 'translateY(8px)'
      },
      '100%':{
          transform: 'translateY(-3px)'
      }
      },
      anime5:{
        '0%':{
          transform: 'translateY(-6px)'
      },
      '100%':{
          transform: 'translateY(11px)'
      }
      },
      anime6:{
        '0%':{
          transform: 'translateY(5px)'
      },
      '100%':{
          transform: 'translateY(-21px)'
      }
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
}
