/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'violet-700': '#290137',
				'violet-600': '#5A3B57',
				'violet-500': '#522A5F',
				'violet-400': '#F5F5F826',
				'violet-300': '#D3BDD9',
				'pink-700': '#FC5F7E',
				'pink-500': '#D3BDD9',
				'pink-100': '#F0E7F3',
				'yellow-700': '#FFCA64',
			},
		},
	},
	plugins: [],
};
