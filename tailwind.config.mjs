/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#ffbf00",
                secondary: "#9b7eca",
                accent: "#7ed4fb",
                extra: "#8fcc75",
                gray: "#999999",
			}
		},
	},
	plugins: [],
}
