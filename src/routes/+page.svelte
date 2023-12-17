<script>
</script>

<h1><span>W</span>elcome Home <span class="jessie">|| </span> Gemütlichkeit</h1>

<div class="paragraph">
	<p class="one">
		Welcome, this website has reached a pretty good version 1.0, so thats feels pretty good. For the
		most part I’d say the site is a nice blueprint of a foundation I'm looking for. Just having
		something up like this has helped me visualize what I believe i'm looking to accomplish with
		this website. Good luck to you all.
	</p>
</div>
<div class="play">
	<p class="chapter--title">v1.0 → v1.5: Infrastructure Junction City</p>
	<p class="chapter--title-sub">Chapter 1: “Is this street suppose to lead to no where?”</p>
	<ul>
		<li>Clean up class names</li>
		<li>A whole lotta animations need to be added</li>
		<li>Make sure all images are .avif, unless they need to be an svg for animation purposes</li>
		<li>Look into a CMS</li>
		<li>More scratch ideas for the General blog</li>
	</ul>
	<ul />
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';
	h1 {
		text-align: center;
		font-size: 3rem;
	}

	span {
		color: $primary-yellow;
		font-weight: 700;
	}

	p {
		font-size: 1.3rem;

		color: white;
	}

	li {
		font-size: 1rem;
	}

	.play {
		border-left: solid 10px $primary-red;
		border-bottom: solid 10px $primary-green;
		height: 40rem;
	}

	.jessie {
		color: $primary-red;
	}
	.chapter--title {
		text-align: center;
		color: $primary-yellow;
		font-weight: 700;
		margin-top: 6rem;
		font-size: 1.5rem;
	}

	.chapter--title-sub {
		text-align: center;
		color: $primary-yellow;
		font-weight: 700;
		font-size: 1.5rem;
		text-decoration: underline;
		text-decoration-color: $primary-yellow;
	}

	.paragraph {
		line-height: 3rem;

		display: flex;

		justify-content: center;

		align-items: center;
		text-align: center;
	}

	@media only screen and (max-width: 548px) {
		.paragraph {
			text-align: start;
		}
	}
</style>
