/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				cream: "#FDFCFA",
				card: "#F8F6F2",
				brand: "#B8936B",
				"brand-dark": "#9A7B5A",
				ink: "#1A1A1A",
				muted: "#7A7A7A",
				border: "#E8E5DF",
				"border-light": "#F0EDE7",
			},
			fontFamily: {
				serif: ['"Cormorant Garamond"', "Georgia", "serif"],
				sans: ['"Inter"', "system-ui", "sans-serif"],
			},
		},
	},
};
