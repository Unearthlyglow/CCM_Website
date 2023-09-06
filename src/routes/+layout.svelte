<script>
	import '@picocss/pico';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/700.css';
	import '@fontsource/lato/900.css';

	import metropolis_building from '$lib/images/metropolis2.svg';
	import footerLogo from '$lib/images/MetroRod.svg';
	import CCMLetters from '$lib/images/CCMLetters.svg';
	import githubLogo from '$lib/images/github-logo.svg';
	import painting1 from '$lib/images/painting1.avif';
	import painting2 from '$lib/images/painting2.webp';
	import painting3 from '$lib/images/painting3.webp';
	import fire from '$lib/images/fire.svg';
	import linked from '$lib/images/linked.svg';
	import TwitterLogo from '$lib/images/Twitter-Logo.svg';
	import IgLogo from '$lib/images/Ig-logo.svg';
	import kryten from '$lib/images/kryten2.svg';
	import Body from '$lib/Body.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from '$lib/Menu.svelte';

	/**
	 * @type {any}
	 */
	let open;
</script>

<svelte:head>
	<meta name="google" content="notranslate" />
</svelte:head>

<div class="container-fluid">
	<div class="hamburger">
		<Hamburger --color="Green" --active-color="#D3A632" --layer-height="3px" bind:open />

		<Menu bind:open />
	</div>

	<nav>
		<img class="logo-building" alt="CCM Logo" src={metropolis_building} />
	</nav>
	<nav class="nav--paintings">
		<img class="painting1" src={painting1} alt="CCM Letters" />
		<img class="painting1" src={painting2} alt="CCM Letters" />
		<img class="painting1" src={painting3} alt="CCM Letters" />
	</nav>

	<nav class="container-tabs">
		<li>
			<a href="/#body" class="single--tab"> Home</a>
		</li>
		<li class="class-divide">||</li>
		<li role="list" dir="ltr">
			<p class="tab-intact" aria-haspopup="listbox">Writing</p>
			<ul role="listbox">
				<li class="manifesto--test"><a href="/jazz-manifesto/#body">Jazz Manifesto</a></li>

				<li>
					<a href="https://unearthlyglow.github.io/CCMBlog/" target="_blank"
						>CCM General Blog(MD Book)</a
					>
				</li>
			</ul>
		</li>
		<li class="class-divide">||</li>
		<li role="list" dir="rtl">
			<p class="tab-intact" aria-haspopup="listbox">Projects</p>
			<ul role="listbox">
				<li><a href="/software/#body">Software Portfolio</a></li>
				<li><a href="/visual/#body">Visual Media</a></li>
				<!-- <li><a href="/metro/#body">Metropolis Design</a></li> -->
				<li><a href="/art/#body">Art I've Enjoyed</a></li>
				<li><a href="/embedded/#body">The Road To Embedded Programming</a></li>
			</ul>
		</li>
		<li class="class-divide">||</li>
		<li role="list" dir="rtl">
			<p class="tab-intact" aria-haspopup="listbox">About</p>
			<ul role="listbox">
				<li><a href="/about/#body">About Me</a></li>
				<!-- <li><a href="/about/resume">Resume</a></li> -->
				<li><a href="/todos/#body">Website To-Do List!</a></li>
			</ul>
		</li>
	</nav>

	<Body>
		<slot />
	</Body>

	<footer class="footer">
		<div class="footer--above">
			<ul>
				<a href="/#body">
					<li>Home</li>
				</a>
				<a href="/about/#body">
					<li>About</li>
				</a>
				<a href="/software/#body">
					<li>Software Portfolio</li>
				</a>
			</ul>
			<ul>
				<a href="/embedded/#body">
					<li>Embedded Programming</li>
				</a>
				<a href="/todos/#body">
					<li>Website To-Dos</li>
				</a>
				<a href="/visual/#body">
					<li>Visual Media</li>
				</a>
				<a href="/art/#body">
					<li>Enjoyable Art</li>
				</a>
			</ul>
			<ul>
				<a href="/jazz-manifesto/#body">
					<li>Jazz Manifesto</li>
				</a>
				<a href="https://unearthlyglow.github.io/CCMBlog/" target="_blank">
					<li>CCM:: General Blog</li>
				</a>

				<li data-tooltip="Nooo, not yet!">CCM:: Bob's Electronics Blog</li>
				<li data-tooltip=" Double Nooo, not yet!">CCM:: Milkbar Blog</li>
			</ul>
			<img class="building-logo" alt="The project logo" src={footerLogo} />
		</div>
		<div class="footer--iconss">
			<a
				href="https://github.com/Unearthlyglow"
				target="_blank"
				data-tooltip="My Github Repos"
				class="footer--github"
			>
				<img class="footer--icons" alt="Github Logo" src={githubLogo} />
			</a>
			<a
				href="https://www.instagram.com/ccm_employee/"
				target="_blank"
				data-tooltip="Instagram"
				class="footer--ig"><img class="footer--icons" alt="Instagram Logo" src={IgLogo} /></a
			>

			<a
				href="https://www.linkedin.com/in/award-malisi/"
				target="_blank"
				data-tooltip="LinkedIn"
				class="footer--linkedin"><img class="footer--icons" alt="LinkedIn Logo" src={linked} /></a
			>

			<a
				href="https://twitter.com/CCMAnd2Cents"
				target="_blank"
				data-tooltip="Twitter"
				class="footer--twitter"
				><img class="footer--icons" alt="Twitter Logo" src={TwitterLogo} /></a
			>
		</div>

		<div class="below--footer">
			<hr class="footer--hr" />

			<div class="footer--ccmquote">
				<div>
					<img class="CCM-letters" src={CCMLetters} alt="CCM Letters" />
					<p class="footer--quote">"It's (Almost) Better Than Life"</p>
					<img class="footer--kryten" src={kryten} alt="Kryten" />
				</div>

				<img class="footer--fire" src={fire} alt="CCM Letters" />
			</div>

			<div class="footer--footloose">
				<p class="footer--friends">My Friend's Digital Places:</p>
				<a href="https://thehappycactusatx.com/">Todd & Mickey's :: The Happy Cactus Apothecary </a>

				<a href="https://www.instagram.com/amatheband/">Blair's :: Ama </a>

				<a href="https://www.josielockharttx.com/">Aaron's :: Josie Lockhart</a>

				<a href="https://adrianshaynes.com/">Adrian's :: HelloMaryJo</a>
			</div>

			<p class="footer--version">Version: <span>1.0.0</span></p>

			<p class="footer--Bottomtext">
				Ich bin immer noch dabei, das herauszufinden, also verzeihen Sie mir bitte etwaige Fehler,
				auf die Sie stoßen. Bitte Für Feedback wenden Sie sich bitte an award@capsules.io. Es können
				alle unlustigen Beschwerden eingereicht werden an DoNotReply@capsules.io.
			</p>
		</div>
	</footer>
</div>

<style lang="scss" global>
	@import '../lib/styles/global.scss';

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

	.hamburger {
		display: none;
	}

	.container-fluid {
		min-height: 100%;
		min-width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, 1fr);
		padding-right: 0px;
		padding-left: 0px;
		background-color: $primary-white;
	}

	.logo-building {
		margin-top: 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	.nav--paintings {
		justify-content: space-around;
	}

	.painting1 {
		max-height: 18rem;
		max-width: 18rem;
	}

	nav {
		background-color: $primary-white;
		color: white;
	}

	.single--tab {
		font-weight: 900;
	}

	.container-tabs {
		justify-content: center;

		& a {
			color: rgb(13, 81, 90);
			font-size: 1.5rem;
		}

		padding: 2rem;
	}

	.tab-intact {
		color: rgb(13, 81, 90);
		font-weight: 900;
		margin: 0;
		font-size: 1.5rem;
	}

	.tab-intact:hover {
		color: #942bef;
	}

	.class-divide {
		color: #8c2525;
	}

	ul[role='listbox'] {
		background-color: $primary-white;
		box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.98);
		border: none;
		text-align: center;

		& a {
			font-size: 0.87rem;
			color: $primary-green;
		}
	}

	ul[role='listbox']:hover {
		background-color: rgb(13, 81, 90);
		transition: background-color 0.5s;

		& a {
			color: #fac53d;
		}

		& a:hover {
			background: rgba(255, 255, 255, 0.343);
		}
	}

	.footer {
		background-color: rgb(199, 210, 210);
		padding-top: 4rem;
	}

	.footer--above {
		display: flex;
		justify-content: space-around;
		line-height: 1.3rem;
	}

	.footer--above > ul > a > li {
		font-size: 0.9rem;
		color: rgb(13, 81, 90);
	}

	.footer--above > ul > li {
		font-size: 0.9rem;
		color: rgb(13, 81, 90);
	}

	.footer--above > ul > a > li:hover {
		color: #8c2525;
	}

	.footer--footloose {
		font-size: 0.7rem;
		font-weight: 900;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.footer--friends {
		margin: 0.3rem;
		font-size: 0.8rem;
		font-weight: 900;
		color: rgb(13, 81, 90);
	}

	.below--footer {
		margin: 1rem;
	}

	a {
		text-decoration: underline;
		color: #363262;
	}

	a:hover {
		color: #d60675;
	}

	.footer--Bottomtext {
		color: #712828;
		font-weight: 700;
		font-size: 0.8rem;
		margin: 1.5rem;
		text-align: center;
	}

	.footer--ccmquote {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.footer--kryten {
		display: block;
		height: 8rem;
		margin-left: 8rem;
		transform: translateY(-1.5rem);
	}

	.footer--quote {
		font-size: 0.8rem;
		font-weight: 800;
		color: rgb(13, 81, 90);
		display: inline-block;
	}

	.footer--fire {
		align-self: center;
	}

	.building-logo {
		height: 10rem;
	}

	.footer--icons {
		height: 1.3rem;
		margin: 1.3rem;
	}

	.footer--github {
		background: #f7be2f;
	}

	.footer--github:hover {
		background: #fddf92;
	}

	.footer--linkedin {
		background: #363262;
	}

	.footer--linkedin:hover {
		background: #ba91ef;
	}

	.footer--twitter {
		background: #860b0b;
	}

	.footer--twitter:hover {
		background: #dd5050;
	}

	.footer--ig {
		background: #c4c1c1;
	}

	.footer--ig:hover {
		background: #ffffff;
	}

	.footer--version {
		font-size: 0.9rem;
		font-weight: 800;
		color: #363262;
		text-align: right;
		margin: 1rem;
	}

	.footer--version > span {
		color: rgb(13, 81, 90);
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

	.footer--iconss {
		text-align: center;
		font-size: 3rem;
		padding: 1rem;
	}

	@media only screen and (max-width: 800px) {
		.painting1 {
			max-height: 10rem;
			max-width: 10rem;
		}

		.footer--above {
			margin-left: 0.5rem;
		}

		.footer--icons {
			height: 1.7rem;
		}

		.footer--iconss {
			text-align: center;
			font-size: 2rem;
		}

		.building-logo {
			height: 6rem;
			margin-right: 0.5rem;
			margin-left: 1rem;
		}
		.footer--fire {
			width: 15rem;
			height: 15rem;
		}

		.footer--kryten {
			display: block;
			height: 6rem;
			transform: translateY(-1.5rem);
		}

		.footer--above > ul > a > li {
			font-size: 0.76rem;
		}
	}

	@media only screen and (max-width: 548px) {
		.footer--kryten {
			transform: translateX(-5rem);
		}

		.hamburger {
			display: block;

			background-color: rgb(46, 46, 51);
			text-decoration: none;
		}

		.container-tabs {
			display: none;
		}
		.nav--paintings {
			margin-bottom: 1rem;
		}
	}

	@media only screen and (max-width: 300px) {
		.footer--kryten {
			transform: translateY(-1.2rem);
			margin-left: 1rem;
		}
	}
</style>
