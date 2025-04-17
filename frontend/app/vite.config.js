import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit()
	],
	server: {
		watch: {
			usePolling: true,
			interval: 100,
		},
		open: true,
	}
});