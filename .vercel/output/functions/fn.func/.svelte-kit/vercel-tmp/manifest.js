export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.3b3fcc50.js","app":"_app/immutable/entry/app.5ee87f67.js","imports":["_app/immutable/entry/start.3b3fcc50.js","_app/immutable/chunks/index.e1f5af94.js","_app/immutable/chunks/singletons.8d09926d.js","_app/immutable/entry/app.5ee87f67.js","_app/immutable/chunks/index.e1f5af94.js"],"stylesheets":[],"fonts":[]},
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
