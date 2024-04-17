// @ts-nocheck
const pages = [
	'about',
	'art',
	'embedded',
	'graphic-design',
	'jazz-manifesto',
	'software',
	'todos',
	'visual',
	'writingmap'
];

const site = 'https://capsulescure.io/';

/** @type {import('./$types').RequestHandler} */
// eslint-disable-next-line no-unused-vars
export async function GET({ url }) {
	const body = sitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
  ${pages
		.map(
			(/** @type {any} */ page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}

</urlset>`;
