export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.81cd3315.js","app":"_app/immutable/entry/app.a6951334.js","imports":["_app/immutable/entry/start.81cd3315.js","_app/immutable/chunks/index.e1f5af94.js","_app/immutable/chunks/singletons.763ade29.js","_app/immutable/entry/app.a6951334.js","_app/immutable/chunks/index.e1f5af94.js"],"stylesheets":[],"fonts":[]},
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
