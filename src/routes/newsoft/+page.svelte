<script>
	import thca from '$lib/images/thca.svg';
	import lion from '$lib/images/lion.png';
	import items from '$lib/images/items.png';
	import store from '$lib/images/store.png';
</script>

<div>
	<div class="thca">
		<a href="https://thehappycactusatx.com/"
			><img class="thca--logo" src={thca} alt="The Happy Cactus Logo" />
		</a>
	</div>
	<p class="date">Year:</p>
	<div class="header">
		<a href="https://thehappycactusatx.com/"><h1>The Happy Cactus Apothecary</h1></a>

		<p class="year">202<span>2</span></p>
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
		color: $primary-yellow;
		font-weight: 700;
	}

	span {
		color: rgb(181, 152, 7);
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
