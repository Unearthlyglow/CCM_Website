import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const grate = "/_app/immutable/assets/grate.b81d3292.png";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1rpaw0f{text-align:center;font-size:4rem;color:#8c2525}h2.svelte-1rpaw0f{text-align:center;font-size:3rem}p.svelte-1rpaw0f{font-weight:600}span.svelte-1rpaw0f{color:#d3a632;font-weight:800}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<h1 class="svelte-1rpaw0f">MANNNNN-GREAT</h1>
<h2 class="svelte-1rpaw0f">Classic 404: Page ${escape($page.error.message)}</h2>

<p class="svelte-1rpaw0f">Hey, this is Award. I don&#39;t know what happened but somehow you ended up at a page that doesn&#39;t
	exist. If you believe this to be a website issue, please email me at <span class="svelte-1rpaw0f">award@capsulescure.io</span>, I&#39;ll look into it. Thank you.
</p>

<img${add_attribute("src", grate, 0)} alt="">`;
});
export {
  Error as default
};
