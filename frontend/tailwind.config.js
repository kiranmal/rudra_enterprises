/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rudra-blue': '#294b9b',
        'rudra-orange': '#f05a19',
        'rudra-dark': '#0f172a',
        'rudra-darker': '#020617',
        'rudra-text': '#1E293B',
        'rudra-muted': '#64748B',
        'rudra-light': '#F8FAFC',
        'rudra-border': '#E2E8F0',
        'rudra-cyan': '#38bdf8',
        'rudra-gold': '#FFD700',
      },
      fontFamily: {
        'body': ['Plus Jakarta Sans', 'sans-serif'],
        'heading': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
