// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://agataimaciek.qd.je",
	server: {
		port: 3000,
	},
	integrations: [mdx(), sitemap(), tailwind()],
});
