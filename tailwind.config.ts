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
			white: '#ffffff',
			'link-blue': '#3366cc',
			'wi-black': '#202122',
			'wi-blue': '#cedff2',
			'wi-blue-dark': '#afcbea',
			'wi-blue-light': '#f5faff',
			'wi-gray': '#eeeeee',
			'wi-gray-dark': '#c8ccd1',
			'wi-gray-light': '#f9f9f9',
			'wi-green': '#cef2e0',
			'wi-green-dark': '#afeacc',
			'wi-green-light': '#f5fffa',
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
