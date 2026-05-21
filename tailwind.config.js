module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.15)',
      },
      backgroundImage: {
        'glass-gradient': 'radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 28%)',
        'frosted-slate': 'linear-gradient(180deg, rgba(15,23,42,0.88), rgba(15,23,42,0.72))',
      },
      colors: {
        primary: '#7C3AED',
        surface: '#0F172A',
      },
    },
  },
  plugins: [],
};
