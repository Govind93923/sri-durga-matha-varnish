/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        industrial: {
          950: '#06080b',
          900: '#0c0f14',
          850: '#11151c',
          800: '#171c26',
          700: '#222938',
          600: '#333e54',
          500: '#4d5d7d',
          400: '#7588a8',
          300: '#a3b3cc',
          200: '#d0dae8',
          100: '#edf2f7',
        },
        varnish: {
          amber: {
            DEFAULT: '#d97706',
            light: '#fbbf24',
            dark: '#92400e',
            glow: 'rgba(217, 119, 6, 0.4)',
          },
          ruby: {
            DEFAULT: '#b91c1c',
            light: '#ef4444',
            dark: '#7f1d1d',
            glow: 'rgba(185, 28, 28, 0.4)',
          },
          orange: {
            DEFAULT: '#ea580c',
            light: '#f97316',
            dark: '#9a3412',
            glow: 'rgba(234, 88, 12, 0.4)',
          },
          gold: {
            DEFAULT: '#ca8a04',
            light: '#eab308',
            dark: '#854d0e',
            glow: 'rgba(202, 138, 4, 0.4)',
          },
          clear: {
            DEFAULT: '#38bdf8',
            light: '#7dd3fc',
            dark: '#0369a1',
            glow: 'rgba(56, 189, 248, 0.35)',
          },
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.4) 100%)',
      },
      boxShadow: {
        'industrial-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
        'amber-glow': '0 0 25px rgba(217, 119, 6, 0.3)',
        'ruby-glow': '0 0 25px rgba(185, 28, 28, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
