// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://ddr997.github.io",
	base: '/agatamaciekwesele',
	integrations: [mdx(), sitemap()],
});