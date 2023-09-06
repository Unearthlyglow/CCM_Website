export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.eefc3cf5.js","app":"_app/immutable/entry/app.0dd8df6c.js","imports":["_app/immutable/entry/start.eefc3cf5.js","_app/immutable/chunks/index.e1f5af94.js","_app/immutable/chunks/singletons.db38794c.js","_app/immutable/entry/app.0dd8df6c.js","_app/immutable/chunks/index.e1f5af94.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			{
				id: "/sitemap.xml.svelte",
				pattern: /^\/sitemap\.xml\.svelte\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/sitemap.xml.svelte/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
