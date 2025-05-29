<script lang="ts">
	import { RV_DMCA_GUID } from '$env/static/public';
	import type { BackendAbout } from '$types';

	import DmcaBadge from '$components/atoms/DmcaBadge.svelte';
	import SquigglyDivider from '$components/atoms/SquigglyDivider.svelte';
	import FooterSection from '$components/molecules/FooterSection.svelte';
	import Button from '$components/atoms/Button.svelte';

	type Props = { about?: BackendAbout | null; websiteUrl?: string | null };
	let { about, websiteUrl }: Props = $props();
</script>

<SquigglyDivider />
<footer>
	<div class="footer-top">
		<section class="main-content">
			<img src="/logo.svg" class="logo-image" alt="ReVanced Logo" />
			<p>{about?.about}</p>
		</section>

		<section class="links-container">
			<FooterSection title="Pages">
				<li><Button type="text" href="{websiteUrl}/">Home</Button></li>
				<li><Button type="text" href="{websiteUrl}/download">Download</Button></li>
				<li><Button type="text" href="{websiteUrl}/patches">Patches</Button></li>
				<li>
					<Button type="text" href="{websiteUrl}/contributors">Contributors</Button>
				</li>
				<li><Button type="text" href="{websiteUrl}/donate">Donate</Button></li>
			</FooterSection>

			{#if about}
				<FooterSection title="Socials">
					{#each about.socials as { name, url }}
						<li>
							<Button type="text" href={url} target="_blank">{name}</Button>
						</li>
					{/each}
				</FooterSection>
			{/if}
		</section>
	</div>

	<div class="footer-bottom">
		<div id="logo-name"><span>Re</span>Vanced</div>

		<a href="{websiteUrl}/donate"><div>Donate</div></a>
		{#if about}
			<a href="mailto:{about.contact.email}"><div>Email</div></a>
		{/if}

		<DmcaBadge guid={RV_DMCA_GUID} />
	</div>
</footer>

<style>
	footer {
		background-color: var(--background-one);
		max-width: min(87%, 100rem);
		padding: 5rem 0rem;
		margin: 0 auto;

		.footer-top {
			display: flex;
			gap: 8rem;
			justify-content: space-between;
			margin-bottom: 4rem;
		}

		.footer-bottom {
			display: flex;
			gap: 2rem;
			align-items: center;

			a {
				color: var(--text-four);
				font-weight: 600;
				text-decoration: none;

				:hover {
					text-decoration: underline var(--secondary);
					color: var(--text-one);
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.footer-bottom {
			flex-wrap: wrap;
			gap: 1rem;
		}
	}

	#logo-name {
		font-size: 1.4rem;
		color: var(--text-one);
		font-weight: 600;

		span {
			color: var(--primary);
		}
	}

	li {
		list-style: none;
		color: var(--text-four);
		font-size: 0.9rem;
		font-weight: 500;
	}

	.main-content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.logo-image {
		height: 2.5rem;
	}

	.links-container {
		display: flex;
		gap: 10rem;
		margin-top: 1rem;
	}

	@media screen and (max-width: 1050px) {
		.footer-top {
			flex-direction: column;
			gap: 2rem;
		}

		.links-container {
			display: grid;
			gap: 2rem;
			grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
		}
	}

	@media screen and (max-width: 768px) {
		.links-container {
			display: flex;
			flex-direction: column;
			gap: initial;
		}
	}
</style>
