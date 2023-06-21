<script>
	import headerLogo from '$lib/images/ccm_logo_svg.svg';
	import Tabs from '$lib/Tabs.svelte';
</script>

<nav class="header">
	<ul class="logo">
		<li><img class="logo-building" alt="CCM Logo" src={headerLogo} /></li>
	</ul>
	<Tabs />
</nav>

<style>
	.header {
		background-color: #271f3e;
		min-height: 20rem;
		text-align: center;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
		background-color: rgb(33, 125, 137);
	}

	.logo-building {
	}
</style>
