# seung-boricha

### Installation

```cmd
npm install seung
```

### Dependencies

##### SSecurity

```cmd
"peerDependencies": {
  "crypto-js": "^4.0.0",
},
```

### Logs

##### Create Vite App

```cmd
npm create vite@latest .
```

```cmd
npm install
```

##### Config Eslint & Prettier

Edit Files
- package.json
- tsconfig.node.json
- tsconfig.app.json

Add Files
- .prettierignore
- .prettierrc.cjs

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

##### Config Path Alias

Edit Files
- vite.config.ts
- tsconfig.app.json
- eslint.config.js

```cmd
npm install --save-dev @types/node vite-tsconfig-paths
```

##### Config NPM Library

Edit Files
- package.json
- vite.config.ts
- tsconfig.app.json

```cmd
npm install --save-dev vite-plugin-dts
```

##### Add Peer Dependencies

```cmd
npm install crypto-js
```

```cmd
npm install --save-dev @types/crypto-js
```
