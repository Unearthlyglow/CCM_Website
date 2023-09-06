<script>
</script>

<h1><span>W</span>elcome Home || Gemütlichkeit</h1>

<div class="paragraph">
	<p class="one">
		Welcome, this website has reached a pretty good version 1.0, so thats feels pretty good. For the
		most part I’d say the site is a nice blueprint of a foundation I'm looking for. Just having
		something up like this has helped me visualize what I believe i'm looking to accomplish with
		this website. Good luck to you all. - Award Malisi
	</p>
</div>
<p class="chapter--title">
	Chapter v1.0 → v1.5: Infrastructure Junction City - “Is this street suppose to lead to no where?”
</p>
<ul>
	<li>Clean up class names</li>
	<li>A whole lotta animations need to be added</li>
	<li>Refactor code blocks and componentize specific sections</li>
	<li>Make sure all images are .avif, unless they need to be an svg for animation purposes</li>
	<li>Re-design Software Portfolio page</li>
	<li>Re-design Visual Media page</li>
	<li>Look into a CMS</li>
	<li>Looking to add a couch to the layout</li>
	<li>More scratch ideas for the General blog</li>
</ul>
<ul />

<style lang="scss">
	@import '../lib/styles/global.scss';
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

	.chapter--title {
		text-align: center;
		color: $primary-yellow;
		font-weight: 700;
		margin-top: 3rem;
		font-size: 1.5rem;
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
