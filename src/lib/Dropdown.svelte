<script></script>

<details class="primary" role="list">
	<summary aria-haspopup="listbox">Dropdown</summary>
	<ul role="listbox" class="place">
		<li><a>Award</a></li>
		<li><a>Braker</a></li>
		<li><a>Different Story</a></li>
	</ul>
</details>

<select>
	<option value="" disabled selected>Select</option>
	<option>…</option>
</select>

<style>
	.place {
		background-color: rgb(105, 105, 172);
	}

	details[role='list'] summary:not([role]) {
		background-color: blue;
	}
</style>
