# Pretty JS

Presets of the Eslint and Prettier

[eslint-config-react](packages/eslint-config-react/README.md)
•
[prettier-config](packages/prettier-config/README.md)

## To install
```
npm install --save-dev @caricati/eslint-config-react @caricati/prettier-config
```

## Usage

Into your eslint file, add the `@caricati/eslint-config-react` extension. If you're using the `.eslintrc`:
```
{
  "extends": "@caricati/eslint-config-react"
}
```

After the package installation, create the `.prettierrc` file in the root path of your project, and add the instruction:
```
"@caricati/prettier-config"
```
