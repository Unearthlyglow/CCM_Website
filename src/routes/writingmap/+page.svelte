<script>
	import jazzbook from '$lib/images/jazzbook.svg';
	import ccmbook from '$lib/images/ccmbook.svg';
	import ckmbook from '$lib/images/ckmbook.svg';
</script>

<div>
	<h2>Jazz Manifesto</h2>
	<img class="book1" alt="CCM Logo" src={jazzbook} />
	<hr class="hr--top" />
	<h2>Completed Articles(<span>None</span>)</h2>
	<img class="book1" alt="CCM Logo" src={ccmbook} />
	<hr class="hr--top" />
	<h2>Ideas(<span>Some</span>)</h2>
	<img class="book2" alt="CCM Logo" src={ckmbook} />
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';

	h2 {
		text-align: center;
	}

	span {
		color: $primary-red;
	}
	.book1 {
		margin-bottom: 4rem;
		margin-left: auto;
		margin-right: auto;
	}

	.book2 {
		margin-bottom: 4rem;
		margin-left: auto;
		margin-right: auto;
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
