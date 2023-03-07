<script context="module" lang="ts">
	import {
		TEXT_ALIGN,
		type FontColor,
		type FontSize,
		type FontWeight,
		type TextAlign
	} from '$lib/types/Text';
	import { FONT_SIZES, FONT_COLOR, FONT_COLOR_HOVER, FONT_WEIGHT } from '$lib/types/Text';
</script>

<script lang="ts">
	export let color: FontColor = 'primary';
	export let size: FontSize = 'base';
	export let hoverColor: FontColor = 'none';
	export let weight: FontWeight = 'normal';
	export let align: TextAlign = 'none';
</script>

<span
	class={`${$$props.class} duration-300
    ${FONT_SIZES[size]}
    ${FONT_COLOR[color]}
    ${FONT_COLOR_HOVER[hoverColor]}
    ${FONT_WEIGHT[weight]}
    ${TEXT_ALIGN[align]}
    `}
>
	<slot />
</span>
