import { inject } from "@vercel/analytics";
const prerender = true;
inject({ mode: "production" });
export {
  prerender
};
