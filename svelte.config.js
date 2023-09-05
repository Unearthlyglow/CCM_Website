// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

// export default {
// 	config
// };

import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import preprocess from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-vercel';

import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
	preprocess: [vitePreprocess()],
	plugins: [imagetools()]
};

// export default defineConfig({
// 	plugins: [imagetools()],
// 	preprocess: preprocess({ typescript: true, scss: true }),
// 	kit: {
// 		adapter: adapter({
// 			// see the 'Deployment configuration' section below
// 		})
// 	}
// });
