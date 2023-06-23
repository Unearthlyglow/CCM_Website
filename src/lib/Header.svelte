<script>
	import headerLogo from '$lib/images/ccm_logo_svg.svg';
	
</script>

<header>
	<nav class="header">
		<img class="logo-building" alt="CCM Logo" src={headerLogo} />
	</nav>
</header>

<style>
	header {
		background-color: rgb(33, 125, 137);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 1rem;

		grid-column: 1 / -1;
	}

	img {
		height: auto;
		grid-row: 1;
	}
</style>
