<script>
	import gsap from 'gsap';
	// import { onMount } from 'svelte';
	// gsap.to('.box', { x: 200 });
</script>



<style>
	.container-tabs {
		display: flex;
		font-weight: 800;
		align-content: end;
		align-items: end;
		justify-content: flex-start;
	}

	summary {
		color: white;
		align-items: center;
	}

	summary:hover {
		color: #8c2525;
		background-color: rgb(233, 228, 228);
		display: block;
	}

	summary:focus {
		color: #8c2525;
	}

	summary::-webkit-details-marker {
		display: none;
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
