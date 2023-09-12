<script>
	import jazzbook from '$lib/images/jazzbook.svg';
	import ccmbook from '$lib/images/ccmbook.svg';
	import software from '$lib/images/software.svg';
	import stars from '$lib/images/stars.svg';
	import visual from '$lib/images/visual.svg';
	import embedded from '$lib/images/embedded.svg';
	import todos from '$lib/images/todos.svg';
</script>

<div>
	<h2><a href="/software#body">Software Portfolio(<span>Some</span>)</a></h2>
	<a href="/software#body"> <img class="book1" alt="CCM Logo" src={software} /></a>

	<hr class="hr--top" />
	<h2>
		<a href="/art#body">Art I've Enjoyed(<span>Some</span>)</a>
	</h2>

	<div data-tooltip="Nooo, not yet!">
		<a href="/art#body"><img class="book1" alt="CCM Logo" src={stars} /></a>
	</div>

	<hr class="hr--top" />
	<h2>
		<a href="/visual#body">Visual Media(<span>None</span>)</a>
	</h2>
	<a href="/visual#body"> <img class="book2" alt="CCM Logo" src={visual} /></a>
	<hr class="hr--top" />
	<h2>
		<a href="/embedded#body">Embedded Programming(<span>Some</span>)</a>
	</h2>
	<a href="/embedded#body"> <img class="book2" alt="CCM Logo" src={embedded} /></a>
	<hr class="hr--top" />
	<h2>
		<a href="/todos#body">Website To-Dos(<span>Some</span>)</a>
	</h2>
	<a href="/todos#body"> <img class="book2" alt="CCM Logo" src={todos} /></a>
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
