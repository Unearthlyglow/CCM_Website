<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import grate from '$lib/images/grate.png';
</script>

<h1>MANNNNN-GREAT</h1>
<h2>Classic 404: Page {$page.error.message}</h2>

<p>
	Hey, this is Award. I don't know what happened but somehow you ended up at a page that doesn't
	exist. If you believe this to be a website issue, please email me at <span
		>award@capsulescure.io</span
	>, I'll look into it. Thank you.
</p>

<img src={grate} alt="" />

<style>
	h1 {
		text-align: center;
		font-size: 4rem;
		color: #8c2525;
	}

	h2 {
		text-align: center;
		font-size: 3rem;
	}

	p {
		font-weight: 600;
	}

	span {
		color: #d3a632;
		font-weight: 800;
	}
</style>
