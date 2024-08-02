<script>
	import painting1 from '$lib/images/painting1.avif';
	import painting2 from '$lib/images/painting2.webp';
	import painting3 from '$lib/images/painting3.webp';
</script>

<div class="body">
	<h1><span>A</span>bout Me</h1>
	<div class="painting1">
		<img src={painting2} alt="CCM Letters" />
	</div>

	<p class="heart">When it Come's From The Heart, It's Easy</p>
	<hr class="hr--bottom" />
	<p>
		My name is Award Malisi. I play music and work with software. I apologize in advance if anything
		you see here offends you, I honestly mean no harm or offense.
	</p>

	<p class="forgive">Forgive me for God’s sake.</p>
	<hr class="hr--box" />
	<h2>Objective of CCM:</h2>

	<p>
		<span>1.</span> To collect, reflect, and share all the knowledge and information that CCM accumulates.
	</p>
	<p><span>2.</span> Help out the community, in mysterious ways.</p>
</div>

<hr class="hr--box-2" />

<!-- TK(Update) -->

<h2 class="about--techstack">Tech Stack & Tools:</h2>

<div>
	<h3>Web Development Programming</h3>

	<ul>
		<li>HTML</li>
		<li>CSS & SASS</li>
		<li>Javascript, Typescript</li>
		<li>Vue/Nuxt, Svelte/Sveltekit</li>
		<li>Node.js, Express.js</li>

		<li>SQL, SQLite, PostgresSQL</li>
		<li>Github</li>
		<li>Docker</li>
		<li>The very helpful and useful packages at https://www.npmjs.com/</li>
		<li>A number of other utility tools: (Gulp, Vercel, Shell, Notion, etc…)</li>
	</ul>
</div>

<div>
	<h3>General Purpose Programming</h3>
	<ul>
		<li>Go</li>
		<li>Rust</li>
		<li>The very beautiful crates made by the many contributors on https://crates.io/</li>
	</ul>
</div>

<div>
	<h3>Visual Design</h3>
	<ul>
		<li>Inkscape</li>
		<li>Figma</li>
		<li>Gimp</li>
		<li>Blender</li>
		<li>OpenToonz</li>
		<li>Final Cut Pro</li>
		<li>S-VHS Camcorders & Tape Decks</li>
		<li>RPG Maker MV</li>
	</ul>

	<hr class="hr--box-3" />
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';
	.body {
		text-align: center;
	}

	.forgive {
		margin-bottom: 6rem;
	}
	.painting1 {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.heart {
		font-size: 4rem;
		padding: 1rem;
		font-weight: bold;
		margin-top: 3rem;
		text-align: center;
	}

	.hr--bottom {
		margin-top: 5rem;
		margin-bottom: 4rem;
		width: 40%;
		background-color: $primary-red;
		height: 20px;
	}

	.hr--box {
		margin-top: 5rem;
		margin-bottom: 4rem;
		width: 5%;
		background-color: $primary-red;
		height: 20px;
	}

	.hr--box-2 {
		margin-top: 5rem;
		margin-bottom: 4rem;
		width: 5%;
		background-color: $primary-green;
		height: 20px;
	}

	.hr--box-3 {
		margin-top: 5rem;
		margin-bottom: 4rem;
		width: 5%;
		background-color: rgb(137, 118, 197);
		height: 20px;
	}

	h1 {
		text-align: center;
		margin-top: 2rem;
		font-size: 3rem;
	}

	h2 {
		text-align: center;
		text-decoration: underline;
		text-decoration-color: $primary-yellow;
		font-size: 3rem;
		margin-top: 5rem;
	}

	h3 {
		text-align: center;
		color: rgb(137, 118, 197);
		margin-bottom: 0rem;
		margin-top: 0rem;
	}

	ul {
		margin-bottom: 3rem;
	}

	li {
		text-align: center;
		list-style-type: none;
		line-height: 2.1rem;
		font-size: 1.3rem;
	}
	span {
		color: #fac53d;
		font-weight: 900;
	}

	p {
		font-size: 1.5rem;
		color: white;
	}

	p:hover {
		color: $primary-yellow;
	}

	.about--techstack {
		margin-bottom: 2rem;
	}

	@media only screen and (max-width: 548px) {
		.body {
			text-align: start;
			margin-bottom: 5rem;
		}
	}
</style>
