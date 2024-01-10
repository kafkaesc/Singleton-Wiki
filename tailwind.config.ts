import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/elements/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			black: '#000000',
			foo: '#f00',
			white: '#ffffff',
			'link-blue': '#3366cc',
			'wi-black': '#202122',
			'wi-blue': '#cedff2',
			'wi-blue-dark': '#afcbea',
			'wi-blue-light': '#f5faff',
			'wi-gray-2': '#f9f9f9',
			'wi-gray-1': '#dddddd',
			'wi-gray': '#eeeeee',
			'wi-gray+1': '#e2e2e2',
			'wi-gray+2': '#c8ccd1',
			'wi-green': '#cef2e0',
			'wi-green-dark': '#afeacc',
			'wi-green-light': '#f5fffa',
			'wi-red': '#d73333',
			'wi-red-dark': '#be2525',
			'wi-red-light': '#dd5454',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
