<script>
</script>

<div id="body">
	<div class="body--inner">
		<hr class="hr--top" />

		<slot />

		<hr class="hr--bottom" />

		<div class="body--box">
			<hr class="hr--box" />
		</div>
		<!-- <a href="/[slug]/#body" role="button">Back to Top</a> -->
	</div>
</div>

<!-- /[slug]#body 
Set it up so that 
-->

<style>
	#body {
		background-color: rgb(46, 46, 51);
		min-height: 40rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	.body--inner {
		margin-top: 1rem;
		margin-left: 4rem;
		margin-right: 4rem;
		/* border-right: 5px #d3a632 solid;
		border-left: 5px #d3a632 solid; */
	}

	.hr--top {
		margin-bottom: 3rem;
		clear: both;
		display: block;
		width: 100%;
		background-color: #d3a632;
		height: 10px;
	}

	.hr--bottom {
		clear: both;
		margin-top: 5rem;
		display: block;
		width: 30%;
		background-color: #d3a632;
		height: 7px;
		margin-bottom: 5rem;
	}

	.body--box {
		display: flex;
	}

	.hr--box {
		clear: both;
		margin-top: 5rem;
		width: 1rem;
		background-color: #712828;
		height: 1.2rem;
		margin-bottom: 5rem;
	margin-right: 3rem;
	}
</style>
