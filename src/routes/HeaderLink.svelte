<script lang="ts">
	import { FONT_COLOR_HOVER } from '$lib/types';

	export let url: string;
	export let label: string;

	const headerLink = `
		color-inherit
		duration-300
		no-underline
		${FONT_COLOR_HOVER['accent1']}
        font-semibold
		`;
</script>

<a class={headerLink} href={url}>{label}</a>
