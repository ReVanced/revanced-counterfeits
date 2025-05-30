<script lang="ts">
	type Props = {
		title: string;
		image?: string;
		description?: string;
		websiteUrl?: string;
		themeColor?: string;
	};
	let { title, image, description, websiteUrl, themeColor }: Props = $props();
</script>

<svelte:head>
	<meta name="title" content={title} />
	<meta property="og:title" content={title} />
	<meta property="twitter:title" content={title} />

	<meta property="og:type" content="website" />

	{#if themeColor}
		<meta name="theme-color" content={themeColor} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta property="twitter:description" content={description} />
	{/if}

	{#if websiteUrl}
		<meta property="og:url" content={websiteUrl} />
		<meta property="twitter:url" content={websiteUrl} />
	{/if}

	{#if image}
		<meta property="og:image" content={image} />
		<meta property="twitter:image" content={image} />
	{/if}
</svelte:head>
