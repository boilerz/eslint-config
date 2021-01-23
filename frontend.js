const config = require('./index');

module.exports = {
  ...config,
  extends: [
    'airbnb',
    ...config.extends.filter(config => config !== 'airbnb/base')
  ],
  rules: {
    ...config.rules,
    'react/jsx-filename-extension': 0,
  }
}
