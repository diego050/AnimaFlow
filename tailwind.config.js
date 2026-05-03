/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-slate': '#0F172A',
        'surface-panel': '#1E293B',
        'steel-blue': '#2C3E50',
        'mint-precision': '#00FFAB',
        'cadmium-orange': '#FF8C00',
        'border-tech': '#334155',
        'text-primary': '#E4E2E3',
        'text-secondary': '#C4C6CD',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      spacing: {
        'unit': '4px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at center, #334155 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      }
    },
  },
  plugins: [],
}
