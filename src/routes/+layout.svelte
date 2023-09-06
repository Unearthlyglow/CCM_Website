<script>
	import '@picocss/pico';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import '@fontsource/lato/900.css';

	import metropolis_building from '$lib/images/metropolis2.svg';
	import footerLogo from '$lib/images/MetroRod.svg';
	import CCMLetters from '$lib/images/CCMLetters.svg';
	import githubLogo from '$lib/images/github-logo.svg';
	import painting1 from '$lib/images/painting1.avif';
	import painting2 from '$lib/images/painting2.webp';
	import painting3 from '$lib/images/painting3.webp';
	import fire from '$lib/images/fire.svg';
	import linked from '$lib/images/linked.svg';
	import TwitterLogo from '$lib/images/Twitter-Logo.svg';
	import IgLogo from '$lib/images/Ig-logo.svg';
	import kryten from '$lib/images/kryten2.svg';
	import Body from '$lib/Body.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from '$lib/Menu.svelte';
	import Nav from '$lib/Nav.svelte';
	import Footer from '$lib/Footer.svelte';

	/**
	 * @type {any}
	 */
	let open;
</script>

<svelte:head>
	<meta name="google" content="notranslate" />
</svelte:head>

<div class="container-fluid">
	<div class="hamburger">
		<Hamburger --color="Green" --active-color="#D3A632" --layer-height="3px" bind:open />

		<Menu bind:open />
	</div>

	<nav>
		<img class="logo-building" alt="CCM Logo" src={metropolis_building} />
	</nav>
	<nav class="nav--paintings">
		<img class="painting1" src={painting1} alt="CCM Letters" />
		<img class="painting1" src={painting2} alt="CCM Letters" />
		<img class="painting1" src={painting3} alt="CCM Letters" />
	</nav>

	<Nav />
	<Body>
		<slot />
	</Body>
	<Footer />
</div>

<style lang="scss" global>
	@import '../lib/styles/global.scss';

	.hamburger {
		display: none;
	}

	.container-fluid {
		min-height: 100%;
		min-width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, 1fr);
		padding-right: 0px;
		padding-left: 0px;
		background-color: $primary-white;
	}

	.logo-building {
		margin-top: 1rem;
	}

	.nav--paintings {
		justify-content: space-around;
	}

	.painting1 {
		max-height: 18rem;
		max-width: 18rem;
	}

	@media only screen and (max-width: 900px) {
		.nav--paintings {
			margin-bottom: 1rem;
			height: 15rem;
		}
	}

	@media only screen and (max-width: 700px) {
		.nav--paintings {
			margin-bottom: 1rem;
			height: 13rem;
		}
	}


	@media only screen and (max-width: 548px) {
		.hamburger {
			display: block;

			background-color: rgb(46, 46, 51);
			text-decoration: none;
		}

		.nav--paintings {
			margin-bottom: 1rem;
			height: 11rem;
		}
	}

	@media only screen and (max-width: 300px) {
	}
</style>
