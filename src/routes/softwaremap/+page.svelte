<script>
	import thcawebsite from '$lib/images/thcawebsite.svg';
	import capsuleswebsite from '$lib/images/capsuleswebsite.svg';
	import rustapps from '$lib/images/rustapps.svg';
</script>

<div>
	<h2><a href="/newsoft#body">The <span>H</span>appy Cactus Apothecary Website</a></h2>
	<a href="/newsoft#body"> <img class="book1" alt="CCM Logo" src={thcawebsite} /></a>
	<hr class="hr--top" />
	<h2>
		<a href="/ccmwebsite#body">CC<span>M</span> Website</a>
	</h2>
	<div>
		<a href="/ccmwebsite#body"><img class="book1" alt="CCM Logo" src={capsuleswebsite} /></a>
	</div>
	<hr class="hr--top" />
	<h2>
		<a href="/rustapps#body"><span>R</span>ust Applications</a>
	</h2>
	<a href="/rustapps#body"> <img class="book1" alt="CCM Logo" src={rustapps} /></a>
	<hr class="hr--top" />
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

	a:hover {
		color: $primary-yellow;
	}

	// span {
	// 	color: $primary-red;
	// }
	.book1 {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 3rem;
	}

	.hr--top {
		clear: both;
		display: block;
		width: 100%;
		background-color: #094a6b;
		height: 7px;
		margin-bottom: 3rem;
	}
</style>
