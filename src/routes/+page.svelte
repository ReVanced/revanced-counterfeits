<script lang="ts">
	import { onMount } from 'svelte';
	import { useSWR } from 'sswr';

	import type { BackendAbout } from '$types';
	import { RV_API_URL } from '$env/static/public';

	import Footer from '$components/organisms/Footer.svelte';

	const { data: about } = useSWR<BackendAbout>(`${RV_API_URL}/v4/about`);
	let referrer: string | null = $state(null);

	onMount(async () => {
		referrer = document.referrer || window.location.href;
	});
</script>

<svelte:head>
	<title>ReVanced - Counterfeit notice</title>
</svelte:head>

<main>
	<div id="content">
		<section class="hero">
			<h1>
				You may be a victim of<br />
				<span class="good"><a href={$about?.socials[0].url}>ReVanced</a></span>
				<span class="bad">counterfeit</span>
			</h1>
			<p>
				If you just landed on this page, it means you may have been redirected here from
				<span class="bad">counterfeit</span>
				website.
			</p>
		</section>
		<section>
			<h2>What is going on?</h2>
			<p>
				Some counterfeiters have been trying to impersonate
				<span class="good"><a href={$about?.socials[0].url}>ReVanced</a></span>
				by creating fake websites and took advantage of this by creating
				<span class="bad">counterfeit</span>
				versions, which are designed to look official but are not.
			</p>
			<p>
				<span class="good"><a href={$about?.socials[0].url}>ReVanced</a></span> has aquired a couple
				of domains that were previously used by counterfeiters via a
				<a href="https://www.wipo.int/amc/en/domains/guide/#What_is_the">
					Uniform Domain Name Dispute Resolution
				</a>.
				<br />
				The counterfeit domains are now redirecting to this page. If you were redirected here, it means
				you may have been a victim of counterfeit.
			</p>
			<a href={$about?.socials[0].url}>
				Visit the official website at <span class="good">{$about?.socials[0].url}</span>
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
					You visited counterfeit website that is not
					<span class="good"><a href={$about?.socials[0].url}>revanced.app</a></span>
					(PS: You just came from <span class="probably-bad">{referrer}</span>).
				</li>
				<li>
					You downloaded ReVanced from any website
					<strong>other than</strong>
					<span class="good"><a href={$about?.socials[0].url}>revanced.app</a></span>.
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
				<span class="good"><a href={$about?.socials[0].url}>ReVanced</a></span>.
			</p>
			<ul>
				<li>
					<span class="bad">revanced.net</span>(Now redirects to
					<span class="good"><a href={$about?.socials[0].url}>revanced.app</a></span>)
				</li>
				<li>
					<span class="bad">revanced.dev</span> (Now redirects to
					<span class="good"><a href={$about?.socials[0].url}>revanced.app</a></span>)
				</li>
				<li><span class="bad">revanced.to</span></li>
				<li><span class="bad">revancedextended.com</span></li>
				<li><span class="bad">revancedextended.io</span></li>
				<li><span class="bad">revancedapp.download</span></li>
				<li><span class="bad">revancedapps.com</span></li>
				<li><span class="bad">revancedapk.org</span></li>
				<li><span class="bad">revancedapp.io</span></li>
				<li><span class="bad">revancedapk.net</span></li>
			</ul>
		</section>
		<section>
			<h2>I downloaded counterfeit, what should I do?</h2>
			<p>
				If you downloaded a <span class="good"><a href={$about?.socials[0].url}>ReVanced</a></span> version
				from one of the websites listed above or any unofficial source, you are strongly recommend to:
			</p>
			<ul>
				<li>Uninstall the counterfeit version.</li>

				<li>Change passwords for any accounts accessed while using the counterfeit app.</li>
				<li>Run a full security check on your device and accounts.</li>
				<li>
					<a href={$about?.socials[0].url}>
						Visit the official website at <span class="good">{$about?.socials[0].url}</span>
					</a> and get the official version.
				</li>
			</ul>
		</section>
		<section>
			<h2>Official links</h2>
			<ul>
				{#if $about}
					{#each $about.socials as social}
						<li>
							<strong>{social.name}:</strong> <a class="good" href={social.url}>{social.url}</a>
						</li>
					{/each}
				{/if}
			</ul>
		</section>
	</div>
</main>

<Footer />

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
	}
	section,
	p {
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
	}

	.good:hover {
		background-color: #0846d6;
		color: #ffffff;
	}

	.good::before {
		content: '✅ ';
	}

	.bad {
		background-color: #ff1f1f55;
		color: #ff0000;
		border-bottom: 1px solid #ff0000;
		box-shadow: 0 0 5px #ff0000;
		cursor: not-allowed;
	}

	.bad::before {
		content: '☠️ ';
	}

	.probably-bad {
		color: #ff9800;
		background-color: #ff980055;
		border-bottom: 1px solid #ff9800;
		box-shadow: 0 0 5px #ff9800;
	}

	.probably-bad::before {
		content: '⚠️ ';
	}

	a {
		color: #1f62ff;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
