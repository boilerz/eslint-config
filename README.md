# @boilerz/eslint-config

[![GitHub package.json version](https://img.shields.io/github/package-json/v/boilerz/eslint-config)](https://www.npmjs.com/package/@boilerz/eslint-config)
[![GH CI Action](https://github.com/boilerz/eslint-config/workflows/CI/badge.svg)](https://github.com/boilerz/eslint-config/actions?query=workflow:CI)

> Airbnb + typescript + prettier aware based eslint config.

### Install

```bash
npx install-peerdeps --dev @boilerz/eslint-config
```

### Usage

`.eslintrc` example for backend project:
```json
{
  "extends": "@boilerz/eslint-config"
}
```

Or for frontend ones:

```json
{
  "extends": "@boilerz/eslint-config/frontend"
}
```

`.prettierrc` example:
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

### Release

```bash
yarn version
yarn publish --access public
```
