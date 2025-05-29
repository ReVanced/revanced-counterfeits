<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SpecialTargetValues, Prettify } from '$types';

	type ButtonType = 'filled' | 'text';

	type BaseProps = {
		type: ButtonType;
		icon?: typeof import('~icons/mdi').default;
		iconColor?: string;
		color?: string;
		label?: string;
		children?: Snippet;
	};

	type ButtonProps = Prettify<
		BaseProps & {
			onclick: () => void;
			href?: never;
			target?: never;
		}
	>;

	type LinkProps = Prettify<
		BaseProps & {
			href: string;
			target?: `${SpecialTargetValues}` | SpecialTargetValues;
			onclick?: never;
		}
	>;

	type Props = ButtonProps | LinkProps;
	let {
		type,
		// https://svelte.dev/docs/svelte/compiler-warnings#svelte_component_deprecated
		icon: Icon,
		href,
		children,
		label = '',
		onclick = () => {},
		iconColor = '',
		color = '',
		target = '_self'
	}: Props = $props();
</script>

<!-- reusable snippet to remove duplicate code -->
{#snippet content()}
	{#if Icon}
		<Icon color={iconColor} />
	{/if}
	<span class="content" style="color: {color};">{@render children?.()}</span>
{/snippet}

{#if href}
	<a {href} {target} class={type} aria-label={label}>
		{@render content()}
	</a>
{:else}
	<button {onclick} class={type} aria-label={label}>
		{@render content()}
	</button>
{/if}

<style lang="scss">
	a,
	button {
		background-color: transparent;
		padding: 0;
		margin: 0;
		min-width: max-content;
		font-size: 0.95rem;
		text-decoration: none;
		color: var(--text-one);
		font-weight: 600;
		border: none;
		border-radius: 100px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		transition: all 0.4s var(--bezier-one);
		user-select: none;
	}

	.filled {
		background-color: var(--primary);
		color: var(--text-three);
		padding: 16px 24px;
	}
	.text {
		background-color: transparent;
		color: var(--primary);
		font-size: 0.95rem;
		font-weight: 600;
		
		:hover {
			text-decoration: underline var(--secondary);
			color: var(--text-one);
			.content {
				text-decoration: underline;
				text-decoration-color: currentColor;
			}
		}
	}
</style>
