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
		}
		// prerender: {
		// 	// in src/routes/+page.svelte and src/lib/components/organisms/Footer.svelte
		// 	// websiteUrl is dynamically fetched from the API
		// 	// when the site is built with adapter-static, the crawler tries to access
		// 	// null/patches, null/download, etc... and so it'll fail
		// 	// since it's not able to fetch external data
		// 	handleHttpError: ({ status, message }) => {
		// 		if (status === 404) return;
		// 		throw new Error(message);
		// 	}
		// }
	}
};

export default config;
