<script lang="ts">
	import Text from '$lib/components/base/Text.svelte';
	import { BACKGROUND_COLOR } from '$lib/types/Background';
	import { FONT_COLOR, FONT_COLOR_HOVER } from '$lib/types/Text';
	import ToggleTheme from './ToggleTheme.svelte';

	export let path: string;
	export let open: boolean;
	export let items: { label: string; path: string }[];

	const HAMBURGER_BUTTON_SHARED = `
		h-2 bg-current my-0.5 duration-300 ease-out
		`;
	const HAMBURGER_BUTTON_1 = `w-8 ${BACKGROUND_COLOR['primary']} ${HAMBURGER_BUTTON_SHARED}`;

	const HAMBURGER_BUTTON_OPEN_SHARED = `
		h-0.5 bg-current my-2 duration-300 ease-out
		bg-light-text-primary
		dark:bg-dark-text-primary
	`;
	const HAMBURGER_BUTTON_1_OPEN = `
		${HAMBURGER_BUTTON_OPEN_SHARED}
		w-6 rotate-45 translate-y-2.5
		`;
	const HAMBURGER_BUTTON_2_OPEN = `
		${HAMBURGER_BUTTON_OPEN_SHARED}
		w-6 opacity-0`;
	const HAMBURGER_BUTTON_3_OPEN = `
		${HAMBURGER_BUTTON_OPEN_SHARED}
		w-6 -rotate-45 -translate-y-2.5`;

	const HAMBURGER_MENU_SHARED = `
		${BACKGROUND_COLOR['secondary']}
		fixed w-full z-10
		overflow-auto
		left-0 top-0 right-0 bottom-0
		duration-500
		transition-all
	`;

	const HAMBURGER_MENU_CLOSED = `
		opacity-0 translate-x-full
		${HAMBURGER_MENU_SHARED}`;
	const HAMBURGER_MENU_OPENED = `${HAMBURGER_MENU_SHARED}`;

	const HAMBURGER_MENU_LINK = `
		w-full duration-300
		${FONT_COLOR['primary']}
		${FONT_COLOR_HOVER['accent1']}
		hover:bg-light-bg-primary/25 hover:dark:bg-dark-bg-primary/25
  	`;
	const HAMBURGER_MENU_LINK_CURRENT = `
		w-full duration-300
		${FONT_COLOR['accent1']}
		${FONT_COLOR_HOVER['accent1']}
		hover:bg-light-bg-primary/25 hover:dark:bg-dark-bg-primary/25
	`;

	const toggleMenu = () => {
		open = !open;
	};
</script>

<div class="pt-1">
	<button on:click={toggleMenu}>
		<div
			class="
		duration-300
		bg-light-text-primary
		dark:bg-dark-text-primary
		hover:dark:bg-dark-text-accent1"
		>
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
			<div class={HAMBURGER_BUTTON_1} />
		</div>
	</button>
	<div class={open ? HAMBURGER_MENU_OPENED : HAMBURGER_MENU_CLOSED}>
		<div class="flex flex-col items-start">
			<div class="flex justify-end w-full pt-2 px-6">
				<Text color="primary" hoverColor="accent1">
					<button on:click={toggleMenu}>
						<div class={HAMBURGER_BUTTON_1_OPEN} />
						<div class={HAMBURGER_BUTTON_2_OPEN} />
						<div class={HAMBURGER_BUTTON_3_OPEN} />
					</button>
				</Text>
			</div>
			{#each items as item}
				<a
					href={item.path}
					target="_self"
					class={item.path === path ? HAMBURGER_MENU_LINK_CURRENT : HAMBURGER_MENU_LINK}
				>
					<div class="flex flex-row items-center px-6">
						<div class="py-4 w-full duration-300">
							<Text weight="bold" size="lg" color="none">{item.label}</Text>
						</div>
						<div>
							<i class={`fa fa-md fa-solid fa-angle-right`} />
						</div>
					</div>
				</a>
			{/each}
			<div class="h-4" />
			<div class="w-full flex flex-row items-center justify-center">
				<ToggleTheme />
			</div>
		</div>
	</div>
</div>
