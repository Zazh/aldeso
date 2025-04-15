const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],

	plugins: [
		require('flowbite/plugin')
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				gray: { 300: '#c4c4c4'},
				primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B'},
			},
			fontSize: {
				'fluid-sm': 'clamp(0.875rem, 0.75rem + 0.25vw, 1rem)',
				'fluid-base': 'clamp(1rem, 0.875rem + 0.5vw, 1.125rem)',
				'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.25rem)',
				'fluid-xl': 'clamp(1.25rem, 1rem + 1vw, 1.5rem)',
				'fluid-2xl': 'clamp(1.5rem, 1rem + 2vw, 2rem)',
				'fluid-4xl': 'clamp(2.25rem, 1.5rem + 3vw, 3rem)',
				'fluid-6xl': 'clamp(3rem, 2rem + 4vw, 5.5rem)',
			},
			lineHeight: {
				'fluid-tight': 'clamp(1.1, 1.05 + 0.3vw, 1.3)',
				'fluid-normal': 'clamp(1.3, 1.2 + 0.4vw, 1.6)',
				'fluid-loose': 'clamp(1.6, 1.4 + 0.6vw, 2)',
			},
			padding: {
				'fluid-xs': 'clamp(0.25rem, 0.15rem + 0.5vw, 0.5rem)',
				'fluid-sm': 'clamp(0.5rem, 0.3rem + 1vw, 1rem)',
				'fluid-md': 'clamp(1rem, 0.6rem + 2vw, 2rem)',
				'fluid-lg': 'clamp(2rem, 1.2rem + 4vw, 4rem)',
			},
			margin: {
				'fluid-xs': 'clamp(0.25rem, 0.15rem + 0.5vw, 0.5rem)',
				'fluid-sm': 'clamp(0.5rem, 0.3rem + 1vw, 1rem)',
				'fluid-md': 'clamp(1rem, 0.6rem + 2vw, 2rem)',
				'fluid-lg': 'clamp(2rem, 1.2rem + 4vw, 4rem)',
			},
			gap: {
				'fluid-xs': 'clamp(0.25rem, 0.15rem + 0.5vw, 0.5rem)',
				'fluid-sm': 'clamp(0.5rem, 0.3rem + 1vw, 1rem)',
				'fluid-md': 'clamp(1rem, 0.6rem + 2vw, 2rem)',
				'fluid-lg': 'clamp(2rem, 1.2rem + 4vw, 4rem)',
			},
		}
	}
};

module.exports = config;