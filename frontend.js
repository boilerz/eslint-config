const config = require('./index');

module.exports = {
  ...config,
  settings: {
    ...config.settings,
    react: {
      'pragma': 'React',
      'version': 'detect'
    },
  }
}
