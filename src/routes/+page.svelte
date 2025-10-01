<script lang="ts">
	import { onMount } from 'svelte';

	import type { BackendAbout } from '$types';
	import { RV_API_URL, RV_WEBSITE_URL } from '$env/static/public';

	import Footer from '$components/organisms/Footer.svelte';
	import Embed from '$components/molecules/Embed.svelte';

	let about = $state<BackendAbout | null>(null);
	let websiteUrl = $state<string | undefined>(RV_WEBSITE_URL);
	let referrer = $state<string | null>(null);

	async function fetchAbout() {
		const res = await fetch(`${RV_API_URL}/v4/about`);
		if (res.ok) {
			about = await res.json();
		} else {
			console.error('Failed to fetch about:', `HTTP ${res.status}`);
		}
	}

	$effect(() => {
		if (about)
			websiteUrl = about.socials.find((socials) => socials.name.toLowerCase() == 'website')?.url;

		if (websiteUrl) {
			const url = new URL(websiteUrl);
			if (referrer) {
				url.searchParams.set('from', referrer);
			}
			websiteUrl = url.toString();
		}
	});

	onMount(() => {
		fetchAbout();
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
				⚠️ <span class="bad">Security alert</span><br />
				You visited a fake <span class="good"><a href={websiteUrl}>ReVanced</a></span> website
			</h1>
			<p class="hero-subtitle">
				This page protects you from ReVanced counterfeits.
				{#if referrer}
					<br />You came from: <span class="probably-bad">{referrer}</span>
				{/if}
			</p>
			<p class="hero-subtitle">
				The only official ReVanced website is
				<a href={websiteUrl}><span class="good">revanced.app</span></a>.
			</p>
			<div class="cta-button">
				<a href={websiteUrl} class="official-btn"> 🔒 Go to the official ReVanced site </a>
			</div>

			<div class="tip-box">
				<strong>💡 Proof:</strong> Always verify websites through their official social media.<br />
				Check our links at the bottom of this page. <br />
			</div>
		</section>

		<section class="urgent">
			<h2>🚨 Downloaded anything? Take action immediately:</h2>
			<ol class="action-steps">
				<li>
					<strong>Uninstall</strong> any ReVanced app not from
					<a href={websiteUrl}><span class="good">revanced.app</span></a>
				</li>
				<li>
					<strong>Change passwords</strong> for accounts you used while the fake app was installed
				</li>
				<li><strong>Run security scan</strong> on your device</li>
				<li>
					<strong>Get the real version</strong> from
					<a href={websiteUrl}><span class="good">revanced.app</span></a>
				</li>
			</ol>
		</section>

		<section>
			<h2>What happened?</h2>
			<p>
				Some counterfeiters created fake ReVanced websites to impersonate <span class="good"
					><a href={websiteUrl}>ReVanced</a></span
				>, which has now legally acquired these domains and now redirects them here to warn users
				like you.
			</p>
			<p class="highlight">
				<strong>Bottom line:</strong> Only
				<a href={websiteUrl}><span class="good">revanced.app</span></a> is the real ReVanced website.
			</p>
		</section>

		<section>
			<h2>How to tell if you're affected</h2>
			<p><strong>You're at risk if you:</strong></p>
			<ul>
				<li>
					Visited any ReVanced site other than <span class="good"
						><a href={websiteUrl}>revanced.app</a></span
					>
					{#if referrer}
						(like <span class="probably-bad">{referrer}</span>)
					{/if}
				</li>
				<li>Downloaded ReVanced from an unofficial source</li>
				<li>Used a pre-made ReVanced APK from anywhere else</li>
			</ul>
		</section>

		<section>
			<h2>Known fake domains</h2>
			<p>These domains were used by scammers (now redirecting here):</p>
			<div class="domain-grid">
				{#each ['vanced.to', 'revanced.net', 'revanced.dev', 'revanced.to', 'revancedextended.com', 'revancedextended.io', 'revancedapp.download', 'revancedapps.com', 'revancedapk.org', 'revancedapp.io', 'revancedapk.net', 'vanced.io'] as domain, i}
					<span class="bad domain-tag">{domain}</span>
				{/each}
			</div>
		</section>

		<section>
			<h2>Official links</h2>
			<ul>
				{#if about}
					{#each about.socials as { name, url }}
						<li><strong>{name}:</strong> <a class="good" href={url}>{url}</a></li>
					{/each}
				{/if}
			</ul>
		</section>
	</div>
</main>

<Footer {about} {websiteUrl} />

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

	.hero-subtitle {
		font-size: 1.1rem;
		margin: 1rem 0;
		color: var(--text-four);
	}

	.cta-button {
		margin-top: 1.5rem;
	}

	.official-btn {
		display: inline-block;
		background: hsl(calc(var(--hue, 206) + 0), 100%, 81%);
		color: hsl(calc(var(--hue, 206) + 20), 48%, 18%);
		font-size: 0.95rem;
		text-decoration: none;
		font-weight: bold;
		border: none;
		border-radius: 100px;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		transition:
			transform 0.4s var(--bezier-one),
			filter 0.4s var(--bezier-one);
		-webkit-user-select: none;
		user-select: none;
		padding: 16px 24px;
	}

	.urgent {
		border-left: 4px solid #ff4444;
		background: linear-gradient(135deg, rgba(255, 68, 68, 0.1), rgba(255, 152, 0, 0.05));
	}

	.action-steps {
		list-style: decimal;
		padding-left: 1.5rem;

		li {
			margin: 0.8rem 0;
			font-size: 1.05rem;
		}
	}

	.highlight {
		background: rgba(31, 98, 255, 0.1);
		border: 1px solid rgba(31, 98, 255, 0.3);
		border-radius: 6px;
		padding: 1rem;
		margin: 1rem 0;
		text-align: center;
	}

	.tip-box {
		background: rgba(255, 193, 7, 0.1);
		border: 1px solid rgba(255, 193, 7, 0.3);
		border-radius: 6px;
		padding: 1rem;
		margin-top: 1rem;
	}

	.domain-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.domain-tag {
		display: block;
		text-align: center;
		padding: 0.4rem 0.8rem;
		margin: 0.2rem;
		font-size: 0.9rem;
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
		color: var(--primary);
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
		color: var(--primary);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
