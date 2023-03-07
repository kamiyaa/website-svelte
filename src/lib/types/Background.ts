export type BackgroundColor = 'none' | 'primary' | 'secondary' | 'tertiary' | 'accent1' | 'accent2';

export const BACKGROUND_COLOR: Record<BackgroundColor, string> = {
	none: '',
	primary: 'bg-light-bg-primary dark:bg-dark-bg-primary',
	secondary: 'bg-light-bg-secondary dark:bg-dark-bg-secondary',
	tertiary: 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary',
	accent1: 'bg-accent1-600 dark:bg-accent1-500',
	accent2: 'bg-accent2-400 dark:bg-accent2-400'
};
