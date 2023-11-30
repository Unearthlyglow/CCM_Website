<script></script>

<div class="body">
	<h1><span>A</span>bout Page</h1>
	<p>
		My name is Award Malisi. I play music and work with software. I apologize in advance if anything
		you see here offends you, I honestly mean no harm or offense. Forgive me for God’s sake.
	</p>
	<h2>Objective of CCM:</h2>

	<p>To collect, reflect, and share all the knowledge and information that I accumulate.</p>
</div>

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
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';
	.body {
		text-align: center;
	}
	h1 {
		text-align: center;
		margin-top: 2rem;
	}

	h2 {
		text-align: center;
		text-decoration: underline;
		text-decoration-color: $primary-yellow;
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
