<script>
	import card00 from '$lib/images/ccmCard00.png';
</script>

<h1><span>V</span>isual Media</h1>

<!-- <h2>Graphic Design <span>:</span></h2> -->

<!-- <p class="video--title">Business Card 00 | 2022</p>
<div class="graphic--window">
	<img class="graphic--frame" alt="CCM Logo" src={card00} />
	<img class="graphic--frame" alt="CCM Logo" src={card00} />
</div> -->

<h2>Video <span>::</span></h2>
<p class="video--title">
	The Super Emergency Morning Show: State of Texas Unemployment
	<span>General Tips</span> | 2021
</p>
<div class="video--frame">
	<iframe
		width="1000"
		height="500"
		src="https://www.youtube.com/embed/JjbOYVH7X5Y"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</div>
<p class="video--title">
	The Super Emergency Morning Show: State of Texas Unemployment Tips:
	<span>I.D Me Verification</span> | 2021
</p>
<div class="video--frame">
	<iframe
		width="1000"
		height="500"
		src="https://www.youtube.com/embed/yNMi0wwMBiE"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';
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
		font-size: 3.5rem;

		color: #f2efe5;
	}

	.graphic--window {
		display: inline-block;
	}

	.video--title {
		font-weight: 700;
		color: #f2efe5;
		letter-spacing: 0.09rem;
		text-align: center;
		/* border: #8c2525 solid 3px; */
		padding: 0.5rem;
	}
	.video--frame {
		display: flex;
		align-items: center;
		margin-bottom: 5rem;
		justify-content: center;
		border: #4a1919 solid 4px;
		padding: 0.5rem;
		background-color: $primary-yellow;
	}

	@media only screen and (max-width: 2800px) {
		.video--frame {
			display: flex;
			align-items: center;
			margin-bottom: 5rem;
			justify-content: center;
			border: #4a1919 solid 4px;
			padding: 0.5rem;
			background-color: rgba(0, 0, 0, 0.268);
			box-sizing: content-box;
			background-color: none;
		}
		@media only screen and (max-width: 1500px) {
			.video--frame {
				background-color: $primary-yellow;
			}
		}
	}
</style>
