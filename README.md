# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

### Logs

React + TypeScript + SWC

```cmd
npm create vite@latest .
```

```cmd
npm install
```

```cmd
npm init @eslint/config@latest
```

```
> seung-boricha@0.0.0 lint
> eslint .


Oops! Something went wrong! :(

ESLint: 9.12.0

Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'eslint-plugin-jsx-a11y' imported from W:\seung-git\seung-boricha\eslint.config.js
    at new NodeError (node:internal/errors:405:5)
    at packageResolve (node:internal/modules/esm/resolve:890:9)
    at moduleResolve (node:internal/modules/esm/resolve:939:20)
    at defaultResolve (node:internal/modules/esm/resolve:1132:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:835:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:77:40)
    at link (node:internal/modules/esm/module_job:76:36)
PS W:\seung-git\seung-boricha> npm install --save-dev  eslint-plugin-jsx-a11y eslint-plugin-react                      

added 114 packages, and audited 258 packages in 4s

114 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS W:\seung-git\seung-boricha> npm init @eslint/config@latest

> seung-boricha@0.0.0 npx
> create-config

@eslint/create-config: v1.3.1

√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · typescript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, typescript-eslint, eslint-plugin-react
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
☕️Installing...

up to date, audited 258 packages in 1s

114 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created W:\seung-git\seung-boricha\eslint.config.js file.
```

```cmd
npm install --save-dev @eslint/eslintrc eslint-config-standard eslint-plugin-jsx-a11y
```

```cmd
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Edit Files
- package.json
- tsconfig.node.json
- tsconfig.app.json

Add Files
- .prettierignore
- .prettierrc.cjs
