import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	envDir: 'env',

	server: {
		host: '192.168.1.65',
		port: 5000,
	},

	publicDir: './global',

	preview: {
		port: 5000,
	},

	build: {
		// ssr: true,
		// ssrManifest: true,
		minify: true,
	},
});
