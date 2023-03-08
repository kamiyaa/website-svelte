<script lang="ts">
	import '../app.postcss';

	import { darkTheme } from '$lib/api/theme';

	import Navbar from './Header.svelte';
	import Footer from './Footer.svelte';
	import { FONT_COLOR } from '$lib/types';
	import { BACKGROUND_COLOR } from '$lib/types/Background';

	$: dark = $darkTheme;

	const mainClass = `
		m-0 p-0
		overflow-none
		scroll-smooth
		duration-300
		z-0

		font-sans

		${BACKGROUND_COLOR['primary']}
		${FONT_COLOR['primary']}
		`;

	const childClass = `
		animate-slide-fade-in
		min-h-screen sm:px-6 px-4
	`;
</script>

<main class:dark>
	<div class={mainClass}>
		<Navbar />
		<div class={childClass}>
			<slot />
		</div>
		<Footer />
	</div>
</main>
