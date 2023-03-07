import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = 'dark';
const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;

export const darkTheme = writable(initialValue === 'dark');

darkTheme.subscribe((darkThemeEnabled) => {
	if (browser) {
		if (darkThemeEnabled) {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.setItem('theme', 'light');
		}
	}
});
