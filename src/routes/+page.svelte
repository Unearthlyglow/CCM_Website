<script>
</script>



<h1>Welcome Home - Gemütlichkeit</h1>

<div class="paragraph">
	<p class="one">
		Welcome, this website has reached a pretty good version 1.0, so thats feels pretty good. For the
		most part I’d say the site is a nice blueprint of a foundation I'm looking for. Just having
		something up like this has helped me visualize what I believe i'm looking to accomplish with
		this website. Good luck to you all.
	</p>
</div>


<style lang="scss">
	@import '$lib/styles/global.scss';
	
	h1 {
		color: $primary-yellow;
		text-align: center;
		font-size: 3rem;
	}

	span {
		color: $primary-yellow;
		font-weight: 700;
	}

	p {
		font-size: 1.3rem;
	}

	li {
		font-size: 1rem;
	}

	.play {
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
