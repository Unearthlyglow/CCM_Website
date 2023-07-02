<script>
	import '@picocss/pico';
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '@fontsource/caveat-brush';
	import headerLogo from '$lib/images/ccm_logo_svg.svg';
	import footerLogo from '$lib/images/MetroRod.svg';
	import CCMLetters from '$lib/images/CCMLetters.svg';
</script>

<div class="container-fluid">
	<nav>
		<img class="logo-building" alt="CCM Logo" src={headerLogo} />
	</nav>
	<nav class="container-tabs">
		<details role="list">
			<summary class="tabs--single" aria-haspopup="listbox" role="primary">Writing</summary>
			<ul role="listbox">
				<li><a href="https://www.google.com">Link</a></li>
				<li><a>Jazz Manifesto</a></li>
			</ul>
		</details>
		<details role="list">
			<summary aria-haspopup="listbox" role="primary">Works In Progress</summary>
			<ul role="listbox">
				<li><a>Bob's Electronics</a></li>
				<li><a>Milk Bar</a></li>
				<li><a>Something</a></li>
			</ul>
		</details>
		<details role="list">
			<summary aria-haspopup="listbox" role="primary">Portfolio</summary>
			<ul role="listbox">
				<li><a>Action</a></li>
			</ul>
		</details>
		<details role="list">
			<summary aria-haspopup="listbox" role="primary">About</summary>
			<ul role="listbox">
				<li><a>Action</a></li>
			</ul>
		</details>
	</nav>

	<div class="body">
		<slot />
	</div>

	<div class="footer">
		<ul>
			<li>About</li>
			<li>Writing</li>
			<li>Works In Projects</li>
			<li>Portfolio</li>
		</ul>
		<ul>
			<li>Jazz Manifesto</li>
			<li>CCM:: General Blog</li>
			<li>CCM:: Bob's Electronics Blog</li>
			<li>CCM:: Milkbar Blog</li>
		</ul>
		<ul>
			<li>Image for Github</li>
		</ul>
		<ul>
			<li>Image for Instagram</li>
		</ul>

		<img class="building-logo" alt="The project logo" src={footerLogo} />
	</div>
	<hr class="hr" />
	<div class="footer--ccmquote">
		<img class="CCM-letters" src={CCMLetters} alt="CCM Letters" />

		<p class="footer--quote">"It's (Almost) Better Than Life"</p>
	</div>

	<p class="footer--friends">My Friend's Digital Places:</p>

	<div class="footer--footloose">
		<a href="">Blair's </a>

		<a href="">Josie's</a>
	</div>

	<p class="footer--text">
		I'm still figuring this out, so please forgive me for any errors you may encounter. Please reach
		out to award@capsules.io for any feedback. Any and all complaints can be sent to
		DoNotReply@capsules.io.
	</p>
</div>

<style>
	.container-fluid {
		min-height: 100vh;
		display: grid;
		grid-template-columns: repeat(auto-fit, 1fr);
		padding-right: 0px;
		padding-left: 0px;
		background-color: rgb(33, 125, 137);
		border-bottom: #8c2525 solid 12px;
		border-top: #8c2525 solid 6px;
	}

	nav {
		background-color: rgb(33, 125, 137);
		color: white;
	}

	details:hover {
		color: #05667e;
		background-color: #d3a632;

		font-size: 1.04rem;
		transition: font-size 0.8s, background-color 0.6s;
	}

	ul[role='listbox'] {
		background-color: #d3a632;
		border: none;
	}

	Details summary:focus:not([role='button']) {
		color: rgb(8, 79, 67);
	}

	.container-tabs {
		justify-content: space-around;
		padding-top: 1rem;
		font-weight: 700;
	}

	.body {
		background-color: rgb(46, 46, 51);
	}

	.footer {
		background-color: rgb(33, 125, 137);
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		margin-top: 3rem;
	}

	.footer--quote {
		font-size: 0.7rem;
		font-weight: 800;
		color: burlywood;
		margin-top: 2rem;
	}

	.footer--ccmquote {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	li {
		list-style-type: none;
		font-weight: 700;
		font-size: 0.7rem;
	}

	li:hover {
		color: #fac53d;
	}

	.footer--friends {
		text-align: center;
		font-size: 0.7rem;
		font-weight: 800;
		color: burlywood;
	}
	.footer--footloose {
		word-spacing: 0.3rem;
		text-align: center;
		font-size: 0.7rem;
		font-weight: 800;
	}

	a {
		text-decoration: underline;
		color: #363262;
	}

	a:hover {
		color: #fac53d;
	}

	.footer--text {
		color: #712828;
		font-weight: 700;
		font-size: 0.7rem;
		padding: 1rem;
	}

	.building-logo {
		height: 6rem;
		padding-right: 1rem;
	}

	.CCM-letters {
		height: 4rem;
		width: 6rem;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	hr {
		border: 0;
		clear: both;
		display: block;
		width: 96%;
		background-color: #d3a632;
		height: 1px;
	}
</style>
