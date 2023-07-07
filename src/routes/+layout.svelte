<script>
	import '@picocss/pico';
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '@fontsource/caveat-brush';
	import headerLogo from '$lib/images/ccm_logo_svg.svg';
	import footerLogo from '$lib/images/MetroRod.svg';
	import CCMLetters from '$lib/images/CCMLetters.svg';
	import githubLogo from '$lib/images/github-logo.svg';
	import LinkedInLogo from '$lib/images/LinkedIn-Logo.svg';
	import TwitterLogo from '$lib/images/Twitter-Logo.svg';
	import IgLogo from '$lib/images/Ig-logo.svg';
	import Body from '$lib/Body.svelte';
</script>

<div class="container-fluid">
	<nav>
		<img class="logo-building" alt="CCM Logo" src={headerLogo} />
	</nav>
	<nav class="container-tabs">
		<details role="list">
			<summary class="tabs--single" aria-haspopup="listbox" role="primary">Home</summary>
		</details>
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

	<!-- <div class="body">
		<slot />
	</div> -->

	<Body />

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
			<a href="https://github.com/Unearthlyglow" data-tooltip="My Github Repo">
				<img class="footer--icons" alt="Github Logo" src={githubLogo} />
			</a>
			<a href="https://www.instagram.com/ccm_employee/" data-tooltip="Instagram"
				><img class="footer--icons" alt="Instagram Logo" src={IgLogo} /></a
			>

			<a href="https://www.linkedin.com/in/award-malisi/" data-tooltip="LinkedIn"
				><img class="footer--icons" alt="LinkedIn Logo" src={LinkedInLogo} /></a
			>

			<a href="https://twitter.com/CCMAnd2Cents" data-tooltip="Twitter"
				><img class="footer--icons" alt="Twitter Logo" src={TwitterLogo} /></a
			>
		</ul>
		<ul />

		<img class="building-logo" alt="The project logo" src={footerLogo} />
	</div>
	<hr class="hr" />
	<div class="footer--ccmquote">
		<img class="CCM-letters" src={CCMLetters} alt="CCM Letters" />

		<p class="footer--quote">"It's (Almost) Better Than Life"</p>
	</div>

	<div class="footer--footloose">
		<p class="footer--friends">My Friend's Digital Places:</p>

		<a href="https://www.instagram.com/amatheband/">Blair's :: Ama </a>

		<a href="https://www.josielockharttx.com/">Josie's :: Josie Lockhart</a>
	</div>

	<i class="footer--text">
		I'm still figuring this out, so please forgive me for any errors you may encounter. Please reach
		out to award@capsules.io for any feedback. Any and all complaints can be sent to
		DoNotReply@capsules.io.
	</i>
</div>

<style>
	a:link {
		text-decoration: none;
	}

	a:visited {
		text-decoration: none;
	}

	a:hover {
		text-decoration: none;
	}

	a:active {
		text-decoration: none;
	}
	.container-fluid {
		min-height: 100vh;
		display: grid;
		grid-template-columns: repeat(auto-fit, 1fr);
		padding-right: 0px;
		padding-left: 0px;
		background-color: rgb(33, 125, 137);
		border-bottom: #8c2525 solid 8px;
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
		/* color: rgb(8, 79, 67); */
		color: palegoldenrod;
	}

	.container-tabs {
		justify-content: space-around;
		padding-top: 1rem;
		font-weight: 700;
	}

	.footer {
		background-color: rgb(33, 125, 137);
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		margin-top: 3rem;
	}

	.footer--quote {
		font-size: 0.8rem;
		font-weight: 800;
		color: palegoldenrod;
		margin-top: 2rem;
	}

	.footer--ccmquote {
		display: flex;
		/* flex-direction: row; */
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

	.footer--footloose {
		font-size: 0.7rem;
		font-weight: 800;
		display: flex;
		flex-direction: column;
		align-content: flex-end;
		align-items: center;
		justify-content: flex-end;
	}

	.footer--friends {
		margin: 0.3rem;
		font-size: 0.8rem;
		font-weight: 800;
		color: hsl(205, 16%, 77%);
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
		align-self: start;
	}

	.footer--icons {
		height: 1.5rem;
		margin: 0.5rem;
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
