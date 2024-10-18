import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [react(), tsconfigPaths(), dts({ tsconfigPath: "tsconfig.app.json", insertTypesEntry: true })],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "@seung",
			formats: ["es", "cjs"],
			fileName: (f) => `index.${f}.js`,
		},
		rollupOptions: {
			external: ["react", "react-dom", "styled-components"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"styled-components": "styled",
				},
			},
		},
		commonjsOptions: {
			esmExternals: ["react"],
		},
	},
});
