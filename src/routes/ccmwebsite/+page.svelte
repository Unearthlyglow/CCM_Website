<script>
	import lion from '$lib/images/ss1.png';
	import items from '$lib/images/ss2.png';
	import store from '$lib/images/ss4.png';
	import ss4 from '$lib/images/ss4.png';
	import ccmweb from '$lib/images/wildwest.png';
</script>

<div>
	<div class="thca">
		<a href="https://www.capsulescure.io/"
			><img class="thca--logo" src={ccmweb} alt="The Happy Cactus Logo" />
		</a>
	</div>
	<p class="date">Year:</p>
	<div class="header">
		<a href="https://www.capsulescure.io/"><h1>Capsules Cure Metropolis</h1></a>

		<p class="year">202<span>2</span></p>
	</div>

	<p>The website of my dreams. This site will be a work in progress forever.</p>

	<div class="monsters">
		<div>
			CCM Deliverables:

			<ul class="deliverables">
				<li>Little bit of everything</li>
			</ul>
		</div>

		<div>
			Team:
			<ul class="team">
				<li>CCM::Award Malisi</li>
			</ul>
		</div>
	</div>
	<hr class="hr--top" />
	<img class="pic1" src={lion} alt="The Happy Cactus Logo" />
	<img class="pic2" src={items} alt="The Happy Cactus Logo" />
	<img class="pic2" src={store} alt="The Happy Cactus Logo" />
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';

	.hr--top {
		margin-bottom: 3rem;
		margin-top: 0rem;
		clear: both;
		display: block;
		width: 100%;
		background-color: #d3a632;
		height: 7px;
	}

	.deliverables {
		display: block;
	}

	.link {
		text-align: center;
	}

	.pic1 {
		margin-top: 2rem;
	}

	.pic2 {
		margin-top: 2rem;
	}

	p {
		color: white;
	}
	h1 {
		font-size: 3.2rem;
		font-weight: 700;
	}

	ul {
		text-align: center;
	}

	img {
		border: 10px solid $primary-white;
	}

	li {
		font-size: 0.79rem;
		display: block;
	}

	.thca {
		text-align: center;
		border: 5px solid rgb(23, 55, 72);
		margin-bottom: 4rem;
	}

	.monsters {
		margin-top: 1.5rem;
		display: flex;
		justify-content: space-evenly;
		text-align: center;
		font-size: 1.1rem;
		font-weight: 700;
		color: rgb(7, 103, 181);
	}

	.monsters > .deliverables > {
		display: block;
	}

	.monsters > p {
		font-weight: 700;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.header > img {
		display: block;
	}

	.year {
		font-size: 5rem;
		font-weight: 700;
		color: white;
		transform: translateY(-1rem);
		margin-left: 5rem;
	}

	.date {
		text-align: end;
		margin-right: 10rem;
		transform: translateY(2rem);
		color: $primary-yellow;
		font-weight: 700;
	}

	span {
		color: rgb(7, 103, 181);
	}

	@media only screen and (max-width: 735px) {
		.date {
			transform: translateY(4rem);
			align-items: end;
		}
	}

	@media only screen and (max-width: 548px) {
		h1 {
			font-size: 2.8rem;
			text-align: start;
		}

		.date {
			text-align: end;
			margin-right: 4rem;
			transform: translateY(2rem);
		}

		.year {
			font-size: 3.8rem;
			font-weight: 700;
			color: white;
			transform: translateY(-1rem);
			margin-left: 0rem;
		}
	}

	@media only screen and (max-width: 360px) {
		.date {
			transform: translateY(3rem);
		}
	}
</style>
