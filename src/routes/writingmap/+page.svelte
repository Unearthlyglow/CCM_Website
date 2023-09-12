<script>
	import jazzbook from '$lib/images/jazzbook.svg';
	import ccmbook from '$lib/images/ccmbook.svg';
	import ckmbook from '$lib/images/ckmbook.svg';
</script>

<div>
	<h2><a href="/jazz-manifesto/#body">Jazz Manifesto</a></h2>
	<a href="jazz-manifesto/#body"> <img class="book1" alt="CCM Logo" src={jazzbook} /></a>

	<hr class="hr--top" />
	<h2>
		Completed Articles(<span>None</span>)
	</h2>

	<div data-tooltip="Nooo, not yet!">
		<img class="book1" alt="CCM Logo" src={ccmbook} />
	</div>

	<hr class="hr--top" />
	<h2>
		<a href="https://unearthlyglow.github.io/CCMBlog/">Ideas(<span>Some</span>)</a>
	</h2>
	<a href="https://unearthlyglow.github.io/CCMBlog/">
		<img class="book2" alt="CCM Logo" src={ckmbook} /></a
	>
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';

	h2 {
		text-align: center;
	}

	div {
	text-align: center;
	
	}

	a {
		color: $primary-white;
	}
	span {
		color: $primary-red;
	}
	.book1 {
		margin-bottom: 4rem;
		margin-left: auto;
		margin-right: auto;
		border: 10px solid $primary-white;
	}

	.book2 {
		margin-bottom: 4rem;
		margin-left: auto;
		margin-right: auto;
		border: 10px solid $primary-white;
	}

	.hr--top {
		margin-bottom: 3rem;
		margin-top: 0rem;
		clear: both;
		display: block;
		width: 100%;
		background-color: #094a6b;
		height: 7px;
	}
</style>
