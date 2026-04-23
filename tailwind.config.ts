import type { Config } from 'tailwindcss'

const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        'background-soft': '#12121a',
        surface: 'rgba(18, 18, 26, 0.72)',
        'surface-strong': 'rgba(20, 20, 30, 0.92)',
        glass: 'rgba(255, 255, 255, 0.05)',
        'glass-strong': 'rgba(255, 255, 255, 0.1)',
        primary: '#8b5cf6',
        'primary-2': '#7c3aed',
        secondary: '#06b6d4',
        foreground: '#f8fafc',
        muted: '#94a3b8',
        border: 'rgba(139, 92, 246, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.26em',
      },
      boxShadow: {
        panel: '0 24px 80px rgba(2, 6, 23, 0.45)',
        glow: '0 0 0 1px rgba(139, 92, 246, 0.18), 0 12px 40px rgba(6, 182, 212, 0.08), 0 16px 48px rgba(124, 58, 237, 0.14)',
        'glow-intense': '0 0 0 1px rgba(139, 92, 246, 0.28), 0 12px 60px rgba(6, 182, 212, 0.15), 0 20px 60px rgba(124, 58, 237, 0.22)',
      },
      backdropBlur: {
        glass: '20px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      borderRadius: {
        card: '1.75rem',
        panel: '2rem',
        tile: '1.5rem',
        xl2: '1.5rem',
      },
      backgroundImage: {
        cosmic:
          'radial-gradient(ellipse 80% 50% at 10% 0%, rgba(124, 58, 237, 0.18) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 90% 10%, rgba(6, 182, 212, 0.12) 0%, transparent 50%), radial-gradient(ellipse 70% 60% at 85% 95%, rgba(124, 58, 237, 0.12) 0%, transparent 45%), linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)',
        brand: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 45%, #06b6d4 100%)',
      },
      backgroundSize: {
        cosmic: '100% 100%, 100% 100%, 100% 100%, 48px 48px, 48px 48px',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
