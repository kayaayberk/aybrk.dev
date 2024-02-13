/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      transitionDelay: {
        50: '50ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        250: '250ms',
        300: '300ms',
        350: '350ms',
        400: '400ms',
        450: '450ms',
        500: '500ms',
        550: '550ms',
        600: '600ms',
      },
      dropShadow: {
        glow: [
          '0 0px 10px rgba(154, 143, 229, 0.5)',
          '0 0px 5px rgba(154, 143, 229, 0.7)',
        ],
      },
      backgroundImage: (theme) => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
        'bg-grid': 'url(../public/background/bg22.svg)',
        'gradient-45deg': 'linear-gradient(-45deg, var(--tw-gradient-stops))',
        'gradient-purp': `linear-gradient(to right, #A395F6, #7EB3E7)`,
      }),
      textColor: ['group-hover'],
      alignSelf: ['start'],
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        spice: {
          DEFAULT: 'hsl(var(--spice))',
          foreground: 'hsl(var(--spice-foreground))',
        },
        spiceLighter: {
          DEFAULT: 'hsl(var(--spiceLighter))',
          foreground: 'hsl(var(--spiceLighter-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slide: {
          '0%': { transform: 'translateY(8px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        reveal: {
          '0%': {
            opacity: 0,
            filter: 'brightness(1) blur(25px)',
            scale: '1.05',
          },
          '10%': { opacity: 1, filter: 'brightness(1.15) blur(10px)' },
          '100%': {
            opacity: 1,
            filter: 'brightness(0.75) blur(0)',
            scale: '1',
          },
        },
        innerScale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        slide: 'slide 0.3s ease-in-out forwards',
        reveal: 'reveal 0.7s ease-in-out',
        wiggle: 'wiggle 0.2s ease-in-out',
        innerScale: 'innerScale 0.5s ease-in-out forwards',
      },
      scale: {
        101: '1.01',
        102: '1.02',
        103: '1.03',
        104: '1.04',
        200: '2',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      scale: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
      duration: ['hover', 'focus'],
    },
  },
  plugins: [require('tailwindcss-animate')],
  corePlugins: {
    filter: true,
    invert: true,
  },
  darkMode: ['class'],
};
