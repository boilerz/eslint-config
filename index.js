module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb/base',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'import/extensions': 0,

    /** @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 2,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error'],

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
      },
      typescript: {}
    },
  },
  env: {
    jest: true,
  }
}
