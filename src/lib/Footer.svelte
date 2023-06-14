<script>
	import footerLogo from '$lib/images/MetroRod.svg';
</script>

<div class="footer">
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi corporis numquam, adipisci</p>
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi corporis numquam, adipisci</p>
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi corporis numquam, adipisci</p>
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi corporis numquam, adipisci</p>
	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi corporis numquam, adipisci And
		then the world went on to the net thisdfsf dsf
	</p>
	<img alt="The project logo" src={footerLogo} />
</div>

<style>
	.footer {
		background-color: #d3a632;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 1rem;
	}

	p {
		color: #8c2525;
	}
</style>
