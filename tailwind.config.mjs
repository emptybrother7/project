/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: ["dark", "forest"],
	  },
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
}
