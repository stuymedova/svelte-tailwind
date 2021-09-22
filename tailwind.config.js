const production = !process.env.ROLLUP_WATCH

module.exports = {
  purge: {
    content: [
      './src/**/*.svelte',
    ],
    enabled: production
  },
  darkMode: false,
  theme: {
    extend: {
      lineHeight: {
        'heading': '1.125'
      },
      fontFamily: {
        'sans-light': ['IBM Plex Sans Light', 'sans-serif'],
        'sans-regular': ['IBM Plex Sans Regular', 'sans-serif'],
      },
      fontSize: {
        'base': ['1rem', '70%'],
        '1xl': ['1rem', '70%'],
        '2xl': ['1.125rem', '70%'],
        '3xl': ['1.25rem', '70%'],
        '4xl': ['1.5rem', '70%'],
        '5xl': ['1.75rem', '70%'],
        '6xl': ['2rem', '70%']
      },
      margin: {
        'sm': '2px',
        'md': '4px',
        'lg': '2rem'
      },
      gap: {
        '4': '4rem'
      },
      colors: {
        'blue': '#0f62fe',
        'dark-blue': '#0353e9',
        'grey': '#393939',
        'lighter-grey': '#4c4c4c',
        'light-grey': '#e5e5e5',
        'red': '#da1e28',
        'dark-red': '#b81921'
      },
      minHeight: {
        'btn': '3rem'
      },
      maxWidth: {
        'btn': '12.25rem'
      }
    }
  }
}