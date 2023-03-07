<script lang="ts">
	import { page } from '$app/stores';
	import { FOOTER_ITEMS } from '$lib/constants/footer';
	import { FONT_COLOR, FONT_COLOR_HOVER } from '$lib/types';
	import { BACKGROUND_COLOR } from '$lib/types/Background';

	const footer = `
    ${BACKGROUND_COLOR['secondary']}
    border-0
    justify-between
    flex-col
    mt-8
    sm:px-12 px-4 py-2
  `;

	const footerLink = `
    ${FONT_COLOR_HOVER['primary']}
    ease-in
    duration-300
  `;

	const currentFooterLink = `
    ${FONT_COLOR['primary']}
    ease-in
    duration-300
  `;

	const footerLinkHovered = `
	${FONT_COLOR['accent1']}
	${FONT_COLOR_HOVER['accent2']}
    ease-in
    duration-300
  `;
</script>

<footer class={footer}>
	<div class={`my-3.5 flex sm:flex-row flex-col justify-between ${FONT_COLOR['tertiary']}`}>
		<div>
			{#each FOOTER_ITEMS as item}
				<a
					class={item.path == $page.url.pathname ? currentFooterLink : footerLink}
					href={item.path}
				>
					{item.label}
				</a>
				<div class="h-2" />
			{/each}
		</div>
		<div class="h-8 w-8" />
		<div class={`flex flex-col justify-end ${FONT_COLOR['tertiary']}`}>
			<p>
				Built using <a
					class={footerLinkHovered}
					rel="noreferrer"
					target="_blank"
					href="https://kit.svelte.dev/">Svelte Kit</a
				>
			</p>
			<div class="h-2" />
			<p>Kamiyaa Technologies Inc. 2023</p>
		</div>
	</div>
</footer>
