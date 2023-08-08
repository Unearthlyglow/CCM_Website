<script>
	import '@picocss/pico';
	import '@fontsource/roboto';
	import '@fontsource/material-icons';
	import '@fontsource/caveat-brush';

	import metropolis_building from '$lib/images/metropolis2.svg';
	import footerLogo from '$lib/images/MetroRod.svg';
	import CCMLetters from '$lib/images/CCMLetters.svg';
	import githubLogo from '$lib/images/github-logo.svg';

	import painting1 from '$lib/images/painting1.jpg';
	import painting2 from '$lib/images/painting2.jpg';
	import painting3 from '$lib/images/painting3.jpg';
	import fire from '$lib/images/fire.svg';
	import Linkedin from '$lib/images/Linkedin.svg';
	import TwitterLogo from '$lib/images/Twitter-Logo.svg';
	import IgLogo from '$lib/images/Ig-logo.svg';
	import Body from '$lib/Body.svelte';
</script>

<div class="container-fluid">
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
			<a href="/#body"> Home</a>
			<!-- <ul role="listbox">
				<li><a href="/jazz-manifesto">Jazz Manifesto</a></li>
				<li><a href="https://unearthlyglow.github.io/CCMBlog/">CCM General Blog(MD Book)</a></li>
			</ul> -->
		</li>
		<li class="class-divide">||</li>
		<li role="list" dir="rtl">
			<p class="tab-intact">Writing</p>
			<ul role="listbox">
				<li><a href="/jazz-manifesto/#body">Jazz Manifesto</a></li>
				<li><a href="https://unearthlyglow.github.io/CCMBlog/">CCM General Blog(MD Book)</a></li>
			</ul>
		</li>
		<li class="class-divide">||</li>
		<li role="list" dir="rtl">
			<p class="tab-intact">Projects</p>
			<ul role="listbox">
				<li><a href="/software/#body">Software</a></li>
				<li><a href="/metro/#body">Metropolis Design</a></li>

				<li><a href="/art/#body">Art I've Enjoyed</a></li>
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

	<Body id="body">
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
				<a href="/jazz-manifesto">
					<li>Jazz Manifesto</li>
				</a>
				<a href="https://unearthlyglow.github.io/CCMBlog/">
					<li>CCM:: General Blog</li>
				</a>

				<li>CCM:: Bob's Electronics Blog</li>
				<li>CCM:: Milkbar Blog</li>
			</ul>

			<div class="footer--iconss">
				<a
					href="https://github.com/Unearthlyglow"
					data-tooltip="My Github Repos"
					class="footer--github"
				>
					<img class="footer--icons" alt="Github Logo" src={githubLogo} />
				</a>
				<a
					href="https://www.instagram.com/ccm_employee/"
					data-tooltip="Instagram"
					class="footer--ig"><img class="footer--icons" alt="Instagram Logo" src={IgLogo} /></a
				>

				<a
					href="https://www.linkedin.com/in/award-malisi/"
					data-tooltip="LinkedIn"
					class="footer--linkedin"
					><img class="footer--icons" alt="LinkedIn Logo" src={Linkedin} /></a
				>

				<a href="https://twitter.com/CCMAnd2Cents" data-tooltip="Twitter" class="footer--twitter"
					><img class="footer--icons" alt="Twitter Logo" src={TwitterLogo} /></a
				>
			</div>

			<img class="building-logo" alt="The project logo" src={footerLogo} />
		</div>

		<div class="below--footer">
			<hr class="footer--hr" />

			<div class="footer--ccmquote">
				<div>
					<img class="CCM-letters" src={CCMLetters} alt="CCM Letters" />
					<p class="footer--quote">"It's (Almost) Better Than Life"</p>
				</div>

				<img class="footer--fire" src={fire} alt="CCM Letters" />
			</div>

			<div class="footer--footloose">
				<p class="footer--friends">My Friend's Digital Places:</p>

				<a href="https://www.instagram.com/amatheband/">Blair's :: Ama </a>

				<a href="https://www.josielockharttx.com/">Aaron's :: Josie Lockhart</a>

				<a href="https://adrianshaynes.com/">Adrian's :: HelloMaryJo</a>
			</div>

			<p class="footer--version">Version: <span>0.6.3</span> Original background color: #217D89</p>

			<i class="footer--Bottomtext">
				I'm still figuring this out, so please forgive me for any errors you may encounter. Please
				reach out to award@capsules.io for any feedback. Any and all unfunny complaints can be sent
				to DoNotReply@capsules.io.
			</i>
		</div>
	</footer>
</div>

<style lang="scss">
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
		min-height: 100%;
		min-width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, 1fr);
		padding-right: 0px;
		padding-left: 0px;
		/* background-color: rgb(33, 125, 137); */
		border-bottom: #8c2525 solid 8px;
		border-top: #8c2525 solid 6px;
	}

	.logo-building {
		margin-top: 1rem;
		margin-left: auto;
		margin-right: auto;
	}
	.nav--paintings {
		justify-content: center;
	}

	.painting1 {
		max-height: 18rem;
		max-width: 18rem;
		margin: 1rem;
	}

	nav {
		background-color: rgb(131, 155, 160);
		color: white;
	}

	.container-tabs {
		justify-content: center;

		& a {
			color: white;
			font-size: 1.5rem;
		}
	}

	.tab-intact {
		color: white;
		font-weight: 700;
		margin: 0;
		font-size: 1.5rem;
	}

	.tab-intact:hover {
		color: #fac53d;
	}

	.class-divide {
		color: #8c2525;
	}

	ul[role='listbox'] {
		background-color: #d3a632;
		box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.98);
		border: none;
		text-align: center;

		& a {
			font-size: 0.7rem;
			color: rgb(13, 81, 90);
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
		background-color: #839ba0;
	}

	.footer--above {
		margin: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		line-height: 1.7rem;
	}

	li {
		list-style-type: none;
		font-weight: 700;
		font-size: 0.7rem;
		color: hsl(0, 0%, 100%);
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
		color: hsl(0, 0%, 100%);
	}

	.below--footer {
		margin: 1rem;
	}

	a {
		text-decoration: underline;
		color: #363262;
	}

	a:hover {
		color: #fac53d;
	}

	.footer--Bottomtext {
		color: #712828;
		font-weight: 700;
		font-size: 0.8rem;
		margin: 3rem;
	}

	.footer--ccmquote {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.footer--quote {
		font-size: 0.8rem;
		font-weight: 800;
		color: #fac53d;
		margin-top: 2rem;
		display: inline-block;
	}

	.footer--fire {
		align-self: center;
		margin-right: 3rem;
	}

	.building-logo {
		height: 6rem;
		padding-right: 1rem;
	}

	.footer--icons {
		height: 1.5rem;
		margin: 1.5rem;
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
		color: #fac53d;
		text-align: right;
		margin: 1rem;
	}

	.footer--version > span {
		color: rgb(255, 255, 255);
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

	@media (width: 500px) {
		.painting1 {
			max-height: 8rem;
			max-width: 8rem;
		}
	}
</style>
