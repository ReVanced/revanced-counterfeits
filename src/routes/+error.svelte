<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$components/atoms/Button.svelte';
	$: status = $page.status;
</script>

<div class="wrapper">
	<h1>{status}</h1>
	{#if status == 404}
		<p>This page received a cease and desist letter from a multi-billion dollar tech company.</p>
		<br />
		<Button type="filled" href="/">Return home</Button>
	{:else}
		<p>
			{$page.error?.message}
		</p>
	{/if}
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		text-align: center;
		width: fit-content;
		margin-inline: auto;
		margin-top: 10rem;
	}

	h1 {
		color: var(--primary);
	}
</style>
