module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
        'react-slate': '#282c34',
        'react-light-blue': '#61dafb',
      },
      fontSize: {
        base: 'calc(10px + 2vmin)',
      },
    },
  },
  plugins: [],
};
