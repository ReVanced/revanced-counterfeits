import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$types: 'src/lib/types.d.ts'
		},
		env: {
			publicPrefix: 'RV'
		},
		prerender: {
			handleHttpError: ({ status, message }) => {
				if (status === 404) return;
				throw new Error(message);
			}
		}
	}
};

export default config;
