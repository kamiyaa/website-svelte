<script>
	import { page } from '$app/stores';

	import { LOGO_NAME } from '$lib/constants/company';
	import { HEADER_ITEMS, HEADER_MOBILE_ITEMS } from '$lib/constants/header';
	import { FONT_COLOR } from '$lib/types';
	import HamburgerMenu from './HamburgerMenu.svelte';
	import HeaderLink from './HeaderLink.svelte';
	import ToggleTheme from './ToggleTheme.svelte';

	const header = `
		${FONT_COLOR['primary']}
		w-full
		pt-2
		sm:px-6 px-3
		sm:text-2xl text-xl
	`;
</script>

<header class={header}>
	<nav class="w-full flex flex-row justify-between items-center">
		<div>
			<HeaderLink url="/" label={LOGO_NAME} />
		</div>
		<div class="sm:block hidden">
			<div class="flex flex-row">
				<ToggleTheme />
				<div class="w-2" />
				{#each HEADER_ITEMS as item}
					<div class="w-4" />
					<HeaderLink url={item.path} label={item.label} />
				{/each}
			</div>
		</div>
		<div class="sm:hidden block flex flex-row">
			<HamburgerMenu open={false} path={$page.url.pathname} items={HEADER_MOBILE_ITEMS} />
		</div>
	</nav>
</header>
