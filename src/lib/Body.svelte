<script>
	import '@fontsource/lato';
	import yellowBuilding from '$lib/images/yellowBuilding.svg';
	import plant from '$lib/images/planth.svg';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>CCM | {$page.data.page.title}</title>
	<meta name="description" content={$page.data.page.description} />
</svelte:head>

<div id="body">
	<div class="body--inner">
		<div class="building-logos">
			<img class="building-logo" alt="The project logo" src={yellowBuilding} />
			<img class="building-logo2" alt="The project logo" src={yellowBuilding} />
		</div>

		<hr class="hr--top" />

		<slot />

		<p class="fin">フィン</p>

		<hr class="hr--bottom" />

		<hr class="hr--bottom2" />

		<p class="body--back-to-top"><a href="/{$page.data.page.title}#body">Back to Top</a></p>
		<img class="body--plant" alt="plant" src={plant} />
	</div>
</div>

<style>
	#body {
		background-color: rgb(46, 46, 51);
		min-height: 40rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	p,
	li,
	a,
	div {
		font-family: 'Lato', sans-serif;
		color: white;
	}

	a:hover {
		color: #fac53d;
	}

	button {
		background: none;
	}

	.body--inner {
		margin-top: 1rem;
		margin-left: 4rem;
		margin-right: 4rem;
		/* border-right: 5px #d3a632 solid;
		border-left: 5px #d3a632 solid; */
	}

	.building-logos {
		display: flex;
		justify-content: space-between;
	}
	.building-logo {
		width: 3rem;
		height: 3rem;
	}

	.building-logo2 {
		width: 3rem;
		height: 3rem;
		-moz-transform: scaleX(-1);
		-o-transform: scaleX(-1);
		-webkit-transform: scaleX(-1);
		transform: scaleX(-1);
		filter: FlipH;
		-ms-filter: 'FlipH';
	}

	.body--plant {
		height: 15rem;
		width: 5rem;
		margin: 0rem;
		padding: 0rem;
	}
	.hr--top {
		margin-bottom: 3rem;
		margin-top: 0rem;
		clear: both;
		display: block;
		width: 100%;
		background-color: #d3a632;
		height: 7px;
	}

	.hr--bottom {
		margin-top: 10rem;
		width: 40%;
		background-color: #d3a632;
		height: 7px;
		margin-bottom: 0rem;
	}

	.hr--bottom2 {
		width: 30%;
		background-color: #712828;
		height: 15px;
		margin-top: 0rem;
	}

	.body--box {
		display: flex;
	}

	.hr--box {
		clear: both;
		transform: translateY(9rem);
		width: 1rem;
		background-color: #712828;
		height: 1.2rem;
		margin-right: 4rem;
	}

	.fin {
		transform: translateY(9rem);
		font-weight: 900;
		font-size: 0.9rem;
		color: #a84747;
		text-align: end;
	}

	.body--back-to-top {
		text-align: center;
		font-size: 1.2rem;
	}
</style>
