<script>

</script>

<div id="body">
	<div class="body--inner">
		<hr class="hr--top" />

		<slot />

		<hr class="hr--bottom" />

		
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

	h1 {
		text-align: center;
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
</style>
