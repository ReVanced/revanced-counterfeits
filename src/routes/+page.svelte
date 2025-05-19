<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import { page } from '$app/state';

	const wordsPerMinute = 200;
	const title = 'Counterfeit website';
	const redirect = 'https://revanced.app';

	let readTimeMs = $state(0);
	let readTimeSec = $derived(Math.floor(readTimeMs / 1000));
	let intervalId: number;

	const readTime: Attachment = (element) => {
		if (!element.textContent) return;

		const wordCount = element.textContent.split(/\s+/).filter((word) => word.length > 0).length;
		const readingTimeMinutes = wordCount / wordsPerMinute;
		readTimeMs = readingTimeMinutes * 60 * 1000;
	};

	$effect(() => {
		if (intervalId) clearInterval(intervalId);

		intervalId = setInterval(() => {
			readTimeSec--;

			if (readTimeSec <= 0) {
				clearInterval(intervalId);
				window.location.href = redirect;
			}
		}, 1000);

		// clean up interval when component is destroyed
		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<h1>{title}</h1>

	<div class="content" {@attach readTime}>
		The website {page.url.href} blah blah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
		in magnam nulla eius pariatur impedit qui quae atque modi, doloribus expedita, molestiae eos eligendi
		cumque minus vitae provident tempore autem.
	</div>

	<div class="countdown">
		You'll be redirected to the official website in {readTimeSec} seconds. Click
		<a href={redirect}>here</a> if nothing happens.
	</div>
</main>

<style>
</style>
