<script>
	import metropolis_building from '$lib/images/metropolis2.svg';
	import thca from '$lib/images/thca.png';
	import ccmweb from '$lib/images/ccmweb.png';
</script>

<h1><span>S</span>oftware</h1>

<h2>Completed <span>:</span></h2>
<a href="https://thehappycactusatx.com/" target="_blank">
	<p class="software--title">
		The Happy Cactus Apothecary |
		<span>2022</span> |
	</p>
</a>

<div class="software--frame">
	<a href="https://thehappycactusatx.com/" target="_blank">
		<img alt="The Happy Cactus Apothecary" src={thca} />
	</a>
</div>
<div class="software--details">
	<p>Technology: BigCommerce | Stencil CLI</p>
</div>

<a href="https://world-self.vercel.app/" target="_blank">
	<p class="software--title">
		CCM Website |
		<span>2023</span> |
	</p>
</a>

<div class="software--frame">
	<a href="https://world-self.vercel.app/" target="_blank">
		<img alt="CCM Logo" src={ccmweb} />
	</a>
</div>

<div class="software--details">
	<p>Technology: Sveltekit | GSAP</p>
	<a href="https://github.com/Unearthlyglow/Grid_Flex_Fun">Github Repo</a>
</div>
<h2>In Progress <span>:</span></h2>

<style>
	h1 {
		text-align: center;
		font-size: 4rem;
		color: #f2efe5;
	}
	span {
		color: #8c2525;
		font-weight: 700;
	}

	h2 {
		font-size: 2.5rem;

		color: #f2efe5;
	}

	p:hover {
		color: #fac53d;
	}

	.software--details {
		margin-bottom: 8rem;
		margin-top: 2rem;
	}

	.software--details > p {
		font-size: 1.3rem;
		margin: 0rem;
	}

	.software--details > a {
		font-size: 1.3rem;
		color: rgb(169, 169, 231);
	}

	.software--details > a:hover {
		font-size: 1.3rem;
		color: #ad4646;
	}

	.software--title {
		font-weight: 700;
		color: #f2efe5;
		letter-spacing: 0.04rem;
		text-align: center;
		font-size: 1.5rem;
	}

	.software--frame {
		display: flex;
		align-items: center;

		justify-content: center;
	}
</style>
