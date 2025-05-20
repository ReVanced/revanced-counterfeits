import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
		}
	}
};

export default config;
