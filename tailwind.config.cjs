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
						primary: '#f0f0f0',
						secondary: '#d1d6e5'
					},
					card: {
						bg: {
							default: '#d1d6e5'
						}
					},
					link: {
						default: '#7c90ff',
						hover1: '#a0c5e7',
						hover2: '#7c90ff'
					},
					text: {
						primary: '#0f0f0f',
						secondary: '#1c1c1c',
						tertiary: '#888888',
						accent1: '#7c90ff',
						accent2: '#a0c5e7'
					},
					system: {
						error: '#e57373'
					}
				},
				dark: {
					bg: {
						primary: '#232326',
						secondary: '#2b2c2f'
					},
					card: {
						bg: {
							default: '#2b2c2f'
						}
					},
					link: {
						default: '#7c90ff',
						hover1: '#a0c5e7',
						hover2: '#7c90ff'
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
