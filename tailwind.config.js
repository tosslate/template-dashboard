const { welcomeTheme } = require('@welcome-ui/themes.welcome')

module.exports = {
  content: [
    './src/**/*.tsx' // prettier-ignore
  ],
  theme: {
    extend: {
      colors: {
        ...welcomeTheme.colors
      }
    }
  },
  plugins: []
}
