<script>
	import thca from '$lib/images/thca.svg';
</script>

<div>
	<p class="date">Year:</p>
	<div class="header">
		<h1>The Happy Cactus Apothecary</h1>

		<p class="year">202<span>2</span></p>
	</div>
	<div class="thca">
		<img class="thca--logo" src={thca} alt="The Happy Cactus Logo" />
	</div>

	<p>
		This website was created for the good folks over at The Happy Cactus Apothecary(THCA) in Austin,
		Texas. THCA is a business dedicated to providing hemp based herbal products that include THC-8,
		THC-9, and CBD items to patrons as well as provide information on said products to help
		alleviate common physical issues such as body aches, sleeping issues, and stress.
	</p>

	<div class="monsters">
		<div>
			CCM Deliverables:

			<ul class="deliverables">
				<li>Graphic Design</li>
				<li>Custom Code With Stencle CLI</li>
				<li>Overall Site Construction</li>
			</ul>
		</div>

		<div>
			Team:
			<ul class="team">
				<li>The Happy Cactus Boys</li>
				<li>CCM::Award Malisi</li>
				<li>Ricky Valenzuela</li>
			</ul>
		</div>
	</div>
	<p class="link"><a href="https://thehappycactusatx.com/">Website Link </a></p>
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';

	.deliverables {
		display: block;
	}

	.link {
		text-align: center;
	}

	p {
		color: white;
	}
	h1 {
		font-size: 2.7rem;
		font-weight: 700;
	}

	ul {
		text-align: center;
	}

	li {
		font-size: 0.79rem;
		display: block;
	}

	.thca {
		text-align: center;
		transform: translateY(-4rem);
		margin-bottom: 1rem;
		margin-top: 0rem;
		height: 9rem;
	}

	.thca > img {
		height: 15rem;
	}

	.monsters {
		margin-top: 1.5rem;
		display: flex;
		justify-content: space-evenly;
		text-align: center;
		font-size: 1.1rem;
		font-weight: 700;
		color: $primary-yellow;
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
	}

	span {
		color: rgb(181, 152, 7);
	}

	@media only screen and (max-width: 735px) {
		.date {
			transform: translateY(4rem);
		}
	}

	@media only screen and (max-width: 548px) {
		h1 {
			font-size: 1.8rem;
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
