# eslint-config-creanetis

The Creanetis config for ESLint

## Installation
```
yarn add --dev eslint-config-creanetis eslint eslint-plugin-import eslint-config-airbnb
```

## Set up a .eslintrc in your project
```
{
  "extends": "creanetis"
}

```

## Add it to your project's package.json
```
{
  "scripts": {
    "lint": "eslint .",
  }
}
```

## Run the linter
```
yarn run lint
```
