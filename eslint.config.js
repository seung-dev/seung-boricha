import tsEslint from "typescript-eslint";
import jsEslint from "@eslint/js";
// import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";

import globals from "globals";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";

import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

// const compat = new FlatCompat();

export default tsEslint.config(
	{ ignores: ["dist", ".prettierrc.cjs"] },
	/* react */
	jsEslint.configs.recommended,
	// ...compat.extends("eslint-config-standard"),
	eslintPluginJsxA11y.flatConfigs.recommended,
	/* typescript */
	...tsEslint.configs.strictTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	/* prettier */
	eslintPluginPrettier,
	/* app */
	{
		languageOptions: {
			parserOptions: {
				ecmaFeatures: { jsx: true },
				tsconfigRootDir: import.meta.dirname,
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				globals: { ...globals.browser },
			},
		},
	},
	{
		settings: {
			react: { version: "detect" },
			"import/resolver": { alias: { map: [["@", "src"]], extensions: [".js", ".jsx", ".ts", ".tsx"] } },
		},
		files: ["./src/**/*.{js,cjs,mjs,jsx,mjsx,ts,tsx,mtsx}"],
		plugins: {
			react: eslintPluginReact,
			"react-hooks": eslintPluginReactHooks,
			"react-refresh": eslintPluginReactRefresh,
		},
		rules: {
			...eslintPluginReact.configs.recommended.rules,
			...eslintPluginReact.configs["jsx-runtime"].rules,
			...eslintPluginReactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"@typescript-eslint/no-unused-vars": "warn",
			camelcase: "off",
			"prettier/prettier": ["error", { endeOfLine: "auto" }],
		},
	},
	/* disable */
	{
		files: ["**/*.{js,cjs,mjs,jsx,mjsx}", "vite.config.ts"],
		extends: [tsEslint.configs.disableTypeChecked],
	},
);
