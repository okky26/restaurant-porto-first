/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.{js,ts}',
    './script/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors : {
        'textPrimary' : '#D9D9D9',
        'darkPrimary' : '#2D2D2D',
        'tertier' : '#F6BD60',
        'button' : '#F28482'
      },
      fontFamily : {
        'bebas' : ['Bebas Neue', 'cursive'],
        'advent' : ['Advent Pro', 'sans-serif']
      },
      minWidth : {
        '400' : '600px'
      },
      keyframes : {
        slideshow : {
          'from' : {transform : 'translateX(0)'},
          'to' : {transform : 'translateX(-100%)'}
        },
        'fade-up' : {
          'from' : {transform : 'translateY(100%)', opacity : 0},
          'to' : {transform : 'translateY(0)', opacity : 1}
        },
        'fade-down' : {
          'from' : {transform : 'translateY(-100%)', opacity : 0},
          'to' : {transform : 'translateY(0)', opacity : 1}
        },
        'fade-right' : {
          'from' : {transform : 'translateX(-100%)', opacity : 0},
          'to' : {transform : 'translateX(0)', opacity : 1}
        },
        'fade-left' : {
          'from' : {transform : 'translateX(100%)', opacity : 0},
          'to' : {transform : 'translateX(0)', opacity : 1}
        },
        'fade-in' : {
          'from' : {opacity : 0},
          'to' : {opacity : 1}
        }
      },
      animation : {
        slideshow : 'slideshow 5s linear infinite',
        'fade-up' : 'fade-up .7s linear forwards',
        'fade-down' : 'fade-down .7s linear forwards',
        'fade-left' : 'fade-left .7s linear forwards',
        'fade-right' : 'fade-right .7s linear forwards',
        'fade-in' : 'fade-in .7s linear forwards'
      }
    },
  },
  plugins: [],
}
