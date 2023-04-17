module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:styled-components-a11y/recommended",
  ],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "styled-components-a11y", "@typescript-eslint"],
  rules: {
    semi: ["error", "never"],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-extraneous-dependencies": "off",
    "styled-components-a11y/no-autofocus": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx", ".ts"],
      },
    ],
  },
  overrides: [
    {
      files: ["*stories.tsx"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "react/function-component-definition": "off",
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
