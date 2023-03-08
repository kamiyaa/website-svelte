const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		boxShadow: {
			md: '0 0 12px -4px #808080',
			'md-dark': '0 0 12px -4px #808080'
		},
		fontSize: {
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			['2xl']: '1.5rem',
			['3xl']: '1.875rem',
			['4xl']: '2.25rem',
			['5xl']: '3rem',
			label: '0.875rem',
			title: '1.25rem',
			normal: '14px'
		},
		fontFamily: {
			sans: ['Poppins', '"Fira Sans"', 'sans'],
			serif: ['Poppins', '"Fira Sans"', 'sans-serif']
		},
		extend: {
			colors: {
				light: {
					bg: {
						primary: '#f7f5f1',
						secondary: '#efece3',
						tertiary: '#e5e0d1'
					},
					text: {
						primary: '#0f0f0f',
						secondary: '#1c1c1c',
						tertiary: '#494949',
						accent1: '#3c4680',
						accent2: '#4e6273'
					},
					system: {
						error: '#e57373'
					}
				},
				dark: {
					bg: {
						primary: '#232326',
						secondary: '#2b2c2f',
						tertiary: '#37383c'
					},
					text: {
						primary: '#f0f0f0',
						secondary: '#ececec',
						tertiary: '#aaaaaa',
						accent1: '#7c90ff',
						accent2: '#a0c5e7'
					},
					system: {
						error: '#e57373'
					}
				}
			},
			animation: {
				'slide-fade-in': 'keyframes-slide-fade-in 1s ease-out'
			},
			keyframes: {
				'keyframes-slide-fade-in': {
					'0%': {
						opacity: 0,
						translate: '0% 2%'
					},
					'100%': {
						opacity: 1,
						translate: '0% 0%'
					}
				}
			}
		}
	},
	plugins: []
};

module.exports = config;
