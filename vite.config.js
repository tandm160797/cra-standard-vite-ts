import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const viteConfig = defineConfig({
	resolve: {
		alias: [
			{
				find: '@components',
				replacement: resolve(__dirname, 'src/components')
			}
		]
	},

	plugins: [react(), svgr()]
});

export default viteConfig;
