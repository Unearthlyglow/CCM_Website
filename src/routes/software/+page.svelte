<script>
	import thca from '$lib/images/thca.png';
	import ccmweb from '$lib/images/ccmweb.png';
	import echor from '$lib/images/echor.png';
	import zerotoprod from '$lib/images/zerotoprod.png';
	import rustos from '$lib/images/rustos.png';
</script>

<h1><span>S</span>oftware</h1>

<h2>Completed <span>:</span></h2>
<a href="https://thehappycactusatx.com/" target="_blank">
	<p class="software--title">
		The Happy Cactus Apothecary |
		<span>2022</span> |
	</p>
</a>

<div class="software--frame">
	<a href="https://thehappycactusatx.com/" target="_blank">
		<img alt="The Happy Cactus Apothecary" src={thca} />
	</a>
</div>
<div class="software--details">
	<p>Technology: BigCommerce | Stencil CLI</p>
	<div class="software--description">
		<!-- <ul>
			<li>Description</li>
			<li>One</li>
		</ul> -->
		<p>
			<span>Description:</span> This website wasc created for the good folks over at The Happy Cactus
			Apothecary(THCA) in Austin Texas. THCA is a business dedicated to providing herbal products including
			THC-8, THC-9, and CBD items to locals as well as provide information on said products to help alleviate
			common physical issues such as body aches, sleeping issues, and stress.
		</p>
	</div>

	<a href="https://world-self.vercel.app/" target="_blank">
		<p class="software--title">
			CCM Website 1.0 |
			<span>2023</span> |
		</p>
	</a>

	<div class="software--frame">
		<a href="https://world-self.vercel.app/" target="_blank">
			<img alt="ccmweb" src={ccmweb} />
		</a>
	</div>

	<div class="software--details">
		<p>Technology: Sveltekit | PicoCSS | GSAP</p>
		<a href="https://github.com/Unearthlyglow/Grid_Flex_Fun" target="_blank">Github Repo</a>
		<div class="software--description">
			<p><span>Description:</span> The website of my dreams?</p>
		</div>
	</div>

	<a href="https://github.com/Unearthlyglow/rust_Cli_book_ch2-Completed" target="_blank">
		<p class="software--title">
			Education Project | Command-Line Rust: Chapter 2: Echor Project |<span>2023</span>|
		</p>
	</a>

	<div class="software--frame">
		<a href="https://github.com/Unearthlyglow/rust_Cli_book_ch2-Completed" target="_blank">
			<img alt="Rustcli-ch2" src={echor} />
		</a>
	</div>

	<div class="software--details">
		<p>Technology: Rust Programming Language</p>
		<p>Crate(s): clap = "2.33"</p>
		<a href="https://github.com/Unearthlyglow/rust_Cli_book_ch2-Completed" target="_blank"
			>Github Repo</a
		>
		<div class="software--description">
			<p>
				<span>Description:</span> This software is a mini-copy of the echo program made by the Berkeley
				Software Distribution. This program accepts arguments and writes them to the standard output.
				This was a beginner project that explored using the clap(Command Line Argument Parser) to handle
				and ouput arguments as well as organizing a basic help menu.
			</p>
		</div>
	</div>

	<h2>In Progress <span>:</span></h2>
	<a href="https://github.com/Unearthlyglow/Zero2ProdProject" target="_blank">
		<p class="software--title">
			Education Project | Zero To Production: Newsletter API | <span>2023</span> |
		</p>
	</a>

	<div class="software--frame">
		<a href="https://github.com/Unearthlyglow/Zero2ProdProject" target="_blank">
			<img alt="zero-to-prod" src={zerotoprod} />
		</a>
	</div>

	<div class="software--details">
		<p>Technology: Rust Programming Language</p>
		<p>Crate(s): actix-web = "4" | tokio = "1"</p>
		<a href="https://github.com/Unearthlyglow/Zero2ProdProject" target="_blank">Github Repo</a>
		<div class="software--description">
			<p><span>Description:</span> The website of my dreams?</p>
		</div>
	</div>

	<a href="https://github.com/Unearthlyglow/rust_os" target="_blank">
		<p class="software--title">
			Education Project | Philipp Oppermann: Operating System in Rust |
			<span>2023</span> |
		</p>
	</a>

	<div class="software--frame">
		<a href="https://github.com/Unearthlyglow/rust_os" target="_blank">
			<img alt="rust-os" src={rustos} />
		</a>
	</div>

	<div class="software--details">
		<p>Technology: Rust Programming Language</p>
		<p>Crate(s): bootloader = "0.9.23"</p>
		<a href="https://github.com/Unearthlyglow/rust_os" target="_blank">Github Repo</a>
		<div class="software--description">
			<p><span>Description:</span> The website of my dreams?</p>
		</div>
	</div>
</div>

<style>
	h1 {
		text-align: center;
		font-size: 4rem;
		color: #f2efe5;
	}
	span {
		color: #dfb1f3;
		font-weight: 700;
	}

	h2 {
		font-size: 2.5rem;

		color: #f2efe5;
	}

	p:hover {
		color: #fac53d;
	}

	.software--description {
		text-align: start;
		padding-top: 1rem;
		display: flex;
		flex-direction: row;
		margin: 0.5rem;
		margin-bottom: 9rem;
	}

	.software--description > p {
		font-size: 1.2rem;
	}

	.software--description > p:hover {
		color: #dfe6ec;
	}

	.software--details {
		margin-top: 1.5rem;
		text-align: center;
	}

	.software--details > p {
		font-size: 1.3rem;
		margin: 0rem;
	}

	.software--details > a {
		font-size: 1.3rem;
		color: rgb(169, 169, 231);
	}

	.software--details > a:hover {
		font-size: 1.3rem;
		color: #ad4646;
	}

	.software--title {
		font-weight: 700;
		color: #f2efe5;
		letter-spacing: 0.04rem;
		text-align: center;
		font-size: 1.5rem;
	}

	.software--frame {
		display: flex;
		align-items: center;
		justify-content: center;
		height: auto;
		width: auto;
	}

	.software--frame > a > img {
		height: max-content;
		width: max-content;
	}
</style>
