<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import { RV_GOOGLE_TAG_MANAGER_ID } from '$env/static/public';

	type Props = { children: Snippet };
	let { children }: Props = $props();

	onMount(() => {
		window.dataLayer = window.dataLayer || [];

		const gtag = (...args: any[]) => window.dataLayer.push(...args);

		gtag('js', new Date());
		gtag('config', RV_GOOGLE_TAG_MANAGER_ID);

		const script = document.createElement('script');
		script.src = `https://www.googletagmanager.com/gtm.js?id=${RV_GOOGLE_TAG_MANAGER_ID}`;
		document.head.append(script);
	});
</script>

<noscript>
	<iframe
		src="https://www.googletagmanager.com/ns.html?id={RV_GOOGLE_TAG_MANAGER_ID}"
		height="0"
		width="0"
		style="display: none; visibility: hidden"
		title="Google Tag Manager"
	></iframe>
</noscript>

{@render children()}
