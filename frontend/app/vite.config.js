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
			usePolling: true, // <- добавь это, если используешь WSL, Docker, VirtualBox
			interval: 100, // можно увеличить до 200–300 если нужно
		},
		open: true,
	}
});