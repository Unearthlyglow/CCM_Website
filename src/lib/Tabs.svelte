<script></script>

<nav class="container">
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
		<summary aria-haspopup="listbox" role="primary">About</summary>
		<ul role="listbox">
			<li><a>Action</a></li>
		</ul>
	</details>
</nav>

<style>
	.container {
		display: flex;
	}

	summary:hover {
		color: rgb(231, 139, 139);
	}

	details {
		margin: 1rem;
	}

	[role='listbox'] {
		background-color: rgb(231, 139, 139);
		/* transform: translateX(-11rem); */
		border: none;
		color: red;
	}

	details[role='list'] summary + ul li a,
	li[role='list'] > ul li a {
		color: rgb(11, 77, 231);
	}
</style>
