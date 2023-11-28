# React + TypeScript + Vite


## Expanding the ESLint configurations on two fronts (TypeScript and React)

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:
- We recommend using the `plugin:@typescript-eslint/recommended` plugin, which will enable type-aware linting rules for TypeScript code. You can do this by adding `@typescript-eslint/recommended` to the `extends` array.
- We recommend using the `plugin:react/recommended` plugin, which will enable additional React-specific linting rules for ESLint. You can do this by adding `plugin:react/recommended` to the `extends` array.



