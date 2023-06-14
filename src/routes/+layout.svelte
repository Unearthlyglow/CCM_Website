<script>
	import '@picocss/pico';
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '@fontsource/caveat-brush';
	import Header from '$lib/Header.svelte';
	import Body from '$lib/Body.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="container-fluid">
	<Header />

	<div class="body">
		<slot />
	</div>

	<Footer />
</div>

<style>
	.container-fluid {
		min-height: 100vh;
		/* display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
		/* These keywords tell the browser to handle the column sizing and element wrapping for us so that the elements will wrap into rows when the width is not large enough to fit them in without any overflow. The fraction unit we used also ensures that in case the width allows for a fraction of a column to fit but not a full column, that space will instead be distributed over the column or columns that already fit, making sure we aren’t left with any empty space at the end of the row. */
		padding-right: 0px;
		padding-left: 0px;
		/* Padding reduced to 0 will be used to allow the website design to fill the page horizontally fully.  */
	}

	/* p {
		font-family: 'Caveat Brush', sans-serif;
	} */

	.body {
		background-color: rgb(114, 206, 252);
		min-height: 40rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
</style>
