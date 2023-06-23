<script>
	import '@picocss/pico';
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '@fontsource/caveat-brush';
	import Header from '$lib/Header.svelte';
	import Body from '$lib/Body.svelte';

	import footerLogo from '$lib/images/MetroRod.svg';
	import CCMLetters from '$lib/images/CCMLetters.svg';
</script>

<div class="container-fluid">
	<Header />

	<div class="body">
		<slot />
	</div>

	<div class="footer">
		<img class="CCM-letters" src={CCMLetters} alt="CCM Letters" />

		<p>Writing</p>
		<p>Works In Project</p>
		<p>Portfolio</p>
		<p>About</p>

		<img class="building-logo" alt="The project logo" src={footerLogo} />
	</div>
</div>

<style>
	.container-fluid {
		min-height: 100vh;
		display: grid;
		grid-template-columns: repeat(auto-fit, 1fr);

		padding-right: 0px;
		padding-left: 0px;
		background-color: black;
	}

	p {
		/* font-family: 'Caveat Brush', sans-serif; */
	}

	.footer {
		background-color: rgb(33, 125, 137);
		display: flex;
		grid-gap: 1rem;
		min-height: 7rem;
		text-align: center;
		justify-content: center;
	}

	p {
		color: #8c2525;
		font-weight: 700;
	}

	.building-logo {
		height: 6rem;
		grid-column: -1;
		grid-row: 2;
		margin-right: 4rem;
	}

	.CCM-letters {
		height: 12rem;
		grid-column: 1;
		grid-row: 2;
	}
</style>
