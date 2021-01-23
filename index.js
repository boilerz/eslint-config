module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb/base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  rules: {
    'import/extensions': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: '@boilerz/**', group: 'internal', position: 'after' }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal'],
        alphabetize: { 'order': 'asc', 'caseInsensitive': true },
        'newlines-between': 'always'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
  },
  env: {
    jest: true,
  }
}
