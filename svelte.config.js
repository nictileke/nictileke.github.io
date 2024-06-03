import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), ],
	extensions: ['.svelte'],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
	},
};

export default config;


