# @boilerz/eslint-config

![GitHub package.json version](https://img.shields.io/github/package-json/v/boilerz/eslint-config)
![David](https://img.shields.io/david/boilerz/eslint-config)

Airbnb + typescript + prettier aware based eslint config.

### Setup

```bash
npx install-peerdeps --dev @boilerz/eslint-config
```

`.eslintrc` example:
```json
{
  "extends": "@boilerz/eslint-config"
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
