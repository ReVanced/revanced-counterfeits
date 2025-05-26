<script lang="ts">
	type Props = { title: string; image?: string; description?: string; websiteUrl?: string };
	let { title, image, description, websiteUrl }: Props = $props();
</script>

<svelte:head>
	<meta name="title" content={title} />
	{#if description}
		<meta name="description" content={description} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://metatags.io/" />
	<meta property="og:title" content={title} />
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	<meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://metatags.io/" />
	<meta property="twitter:title" content={title} />
	{#if description}
		<meta property="twitter:description" content={description} />
	{/if}
	<meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
</svelte:head>
