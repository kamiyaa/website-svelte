export type FontColor = 'none' | 'primary' | 'secondary' | 'tertiary' | 'accent1' | 'accent2';
export type FontSize =
	| 'none'
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl';
export type FontWeight =
	| 'none'
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';
export type TextAlign = 'none' | 'center' | 'left' | 'right';

export const FONT_COLOR: Record<FontColor, string> = {
	none: '',
	primary: 'text-light-text-primary dark:text-dark-text-primary',
	secondary: 'text-light-text-secondary dark:text-dark-text-secondary',
	tertiary: 'text-light-text-tertiary dark:text-dark-text-tertiary',
	accent1: 'text-light-text-accent1 dark:text-dark-text-accent1',
	accent2: 'text-light-text-accent2 dark:text-dark-text-accent2'
};
export const FONT_COLOR_REVERSE: Record<FontColor, string> = {
	none: '',
	primary: 'text-dark-text-primary dark:text-light-text-primary',
	secondary: 'text-dark-text-secondary dark:text-light-text-secondary',
	tertiary: 'text-dark-text-tertiary dark:text-light-text-tertiary',
	accent1: 'text-dark-text-accent1 dark:text-light-text-accent1',
	accent2: 'text-dark-text-accent2 dark:text-light-text-accent2'
};
export const FONT_COLOR_HOVER: Record<FontColor, string> = {
	none: '',
	primary: 'hover:text-light-text-primary hover:dark:text-dark-text-primary',
	secondary: 'hover:text-light-text-secondary hover:dark:text-dark-text-secondary',
	tertiary: 'hover:text-light-text-tertiary hover:dark:text-dark-text-tertiary',
	accent1: 'hover:text-light-text-accent1 hover:dark:text-dark-text-accent1',
	accent2: 'hover:text-light-text-accent2 hover:dark:text-dark-text-accent2'
};

export const FONT_SIZES: Record<FontSize, string> = {
	none: '',
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl',
	'9xl': 'text-9xl'
};
export const FONT_WEIGHT: Record<FontWeight, string> = {
	none: '',
	thin: 'font-thin',
	extralight: 'font-extralight',
	light: 'font-light',
	normal: 'font-normal',
	medium: 'font-medium',
	semibold: 'font-semibold',
	bold: 'font-bold',
	extrabold: 'font-extrabold',
	black: 'font-black'
};
export const TEXT_ALIGN: Record<TextAlign, string> = {
	none: '',
	left: 'text-left',
	right: 'text-right',
	center: 'text-center'
};
