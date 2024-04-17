<script>
	import echor from '$lib/images/echor.png';
	import zerotoprod from '$lib/images/zerotoprod.png';
	import rustos from '$lib/images/rustos.png';
</script>

<h1>Rust Software</h1>
<h2>Completed <span>:</span></h2>

<div>
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
			<p>
				<span>Description:</span>This project was started to help me better my knowledge of
				backend-development using the Rust ecosystem. The end-result will be a fast, secure, and
				hopefully bug free newsletter that I plan on attaching to my main website. The project
				follows the book Zero to Production by Luca Palmieri.
			</p>
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
			<p>
				<span>Description:</span>This project is dedicated to creating a basic operating system in
				the Rust programming language. The project starts with creating a freestanding Rust binary,
				travels through interrupts, memory management, and lastly multitasking. I too was inspired
				when I read about Linus Torvalds's creation of the Linux Kernel, and that paired with my
				current curiosity about how computers work from the lowest level has led me to take quite
				the gander at what it takes to create an operating system specifically in Rust. The project
				follows the work of Philipp Oppermann.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@import '$lib/styles/global.scss';
	span {
		color: #dfb1f3;
		font-weight: 700;
	}

	h1 {
		font-size: 3.5rem;
		text-align: center;
		color: #f2efe5;
	}

	h2 {
		font-size: 2.5rem;
		text-align: center;
		color: #f2efe5;
	}

	h1:hover {
		color: $primary-yellow;
	}
	h2:hover {
		color: $primary-yellow;
	}

	p:hover {
		color: #fac53d;
	}

	img {
		border: 10px solid $primary-white;
	}

	.software--description {
		text-align: start;
		padding-top: 1rem;
		display: flex;
		flex-direction: row;
		margin: 0.5rem;
		margin-bottom: 5rem;
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
