<script lang="ts">
	import { onMount } from 'svelte';
	import { useSWR } from 'sswr';

	import type { BackendAbout } from '$types';
	import { RV_API_URL } from '$env/static/public';

	import Footer from '$components/organisms/Footer.svelte';
	import Embed from '$components/molecules/Embed.svelte';

	const { data: about } = useSWR<BackendAbout>(`${RV_API_URL}/v4/about`);
	let referrer: string | null = $state(null);
	let websiteUrl: string | null = $state(null);

	$effect(() => {
		if ($about) websiteUrl = $about.socials[0].url;
	});

	onMount(() => {
		referrer = document.referrer;
	});
</script>

<svelte:head>
	<title>ReVanced - Counterfeit notice</title>
</svelte:head>

<Embed
	title="ReVanced - Counterfeit notice"
	description="You may be a victim of ReVanced counterfeit. Learn more about it here."
	{websiteUrl}
	image={`${websiteUrl}/logo.png`}
	themeColor="#9FD5FF"
/>

<main>
	<div id="content">
		<section class="hero">
			<h1>
				You may be a victim of<br />
				<span class="good"><a href={websiteUrl}>ReVanced</a></span>
				<span class="bad">counterfeit</span>
			</h1>
			<p>
				If you just landed on this page, you may have been redirected here from a
				<span class="bad">counterfeit</span> website.
			</p>
		</section>

		<section>
			<h2>What is going on?</h2>
			<p>
				Some counterfeiters have been trying to impersonate
				<span class="good"><a href={websiteUrl}>ReVanced</a></span>
				by creating fake websites and took advantage of this by creating
				<span class="bad">counterfeit</span>
				versions, which are designed to look official but are not.
			</p>
			<p>
				<span class="good"><a href={websiteUrl}>ReVanced</a></span> has acquired a couple of domains
				that were previously used by counterfeiters via a
				<a href="https://www.wipo.int/amc/en/domains/guide/#What_is_the">
					Uniform Domain Name Dispute Resolution
				</a>.
				<br />
				The counterfeit domains are now redirecting to this page. If you were redirected here, it means
				you may have been a victim of counterfeit.
			</p>
			<a href={websiteUrl}>
				Visit the official website at <span class="good">{websiteUrl}</span>
			</a>
		</section>

		<section>
			<h2>Am I a victim?</h2>
			<p>
				If you are unsure whether you are a victim of counterfeit, here are some signs to look out
				for:
			</p>
			<ul>
				<li>
					You visited a counterfeit website that is not
					<span class="good"><a href={websiteUrl}>revanced.app</a></span>
					{#if referrer}
						(PS: You just came from <span class="probably-bad">{referrer}</span>)
					{/if}.
				</li>
				<li>
					You downloaded ReVanced from any website
					<strong>other than</strong>
					<span class="good"><a href={websiteUrl}>revanced.app</a></span>.
				</li>
				<li>You used a pre-patched APK not obtained officially.</li>
			</ul>
			<p>
				Rule of thumb: You can gain trust for a website by checking its reputation on other
				websites. If a website does not link any social media with legitimate activity, it is
				probably <span class="bad">counterfeit</span>. If unsure, check the official links below.
			</p>
		</section>

		<section>
			<h2>Known counterfeits</h2>
			<p>
				These are the known counterfeit domains that have been used to impersonate
				<span class="good"><a href={websiteUrl}>ReVanced</a></span>.
			</p>
			<ul>
				{#each ['revanced.net', 'revanced.dev', 'revanced.to', 'revancedextended.com', 'revancedextended.io', 'revancedapp.download', 'revancedapps.com', 'revancedapk.org', 'revancedapp.io', 'revancedapk.net'] as domain, i}
					<li>
						<span class="bad">{domain}</span>
						{#if ['revanced.net', 'revanced.dev'].includes(domain)}
							(Now redirects to <span class="good"><a href={websiteUrl}>revanced.app</a></span>)
						{/if}
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2>I downloaded counterfeit, what should I do?</h2>
			<p>
				If you downloaded a <span class="good"><a href={websiteUrl}>ReVanced</a></span> version from
				one of the websites listed above or any unofficial source, you are strongly recommended to:
			</p>
			<ul>
				<li>Uninstall the counterfeit version.</li>
				<li>Change passwords for any accounts accessed while using the counterfeit app.</li>
				<li>Run a full security check on your device and accounts.</li>
				<li>
					<a href={websiteUrl}>
						Visit the official website at <span class="good">{websiteUrl}</span>
					</a> and get the official version.
				</li>
			</ul>
		</section>

		<section>
			<h2>Official links</h2>
			<ul>
				{#if $about}
					{#each $about.socials as { name, url }}
						<li><strong>{name}:</strong> <a class="good" href={url}>{url}</a></li>
					{/each}
				{/if}
			</ul>
		</section>
	</div>
</main>

<Footer about={$about} {websiteUrl} />

<style>
	:root {
		background-color: var(--background-one);
		color: var(--text-four);
	}

	h1,
	h2 {
		color: var(--primary);
	}

	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
	}

	section {
		padding: 1rem;
		border-radius: 1rem;
		background-color: var(--surface-eight);
		margin: 10px 0;
	}

	.hero {
		text-align: center;
	}

	#content {
		max-width: 1080px;
		width: 100%;
		padding: 20px;
	}

	span {
		white-space: nowrap;
		border: none;
		padding: 1px 2px;
		border-radius: 5px;
	}

	ul {
		list-style: inside;
		padding: 0;
	}

	li {
		padding: 2px 0;
	}

	.good {
		background-color: #1f62ff55;
		color: #1f62ff;
		border-bottom: 1px solid #1f62ff;
		box-shadow: 0 0 5px #1f62ff;

		&:hover {
			background-color: #0846d6;
			color: #ffffff;
		}

		&::before {
			content: '✅ ';
		}
	}

	.bad {
		background-color: #ff1f1f55;
		color: #ff0000;
		border-bottom: 1px solid #ff0000;
		box-shadow: 0 0 5px #ff0000;
		cursor: not-allowed;

		&::before {
			content: '☠️ ';
		}
	}

	.probably-bad {
		color: #ff9800;
		background-color: #ff980055;
		border-bottom: 1px solid #ff9800;
		box-shadow: 0 0 5px #ff9800;

		&::before {
			content: '⚠️ ';
		}
	}
	a {
		color: #1f62ff;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
