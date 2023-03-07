<script lang="ts">
	import { FONT_COLOR } from "$lib/types";
</script>

<h4 class={`
    ${FONT_COLOR['primary']}
    text-xl font-bold
`}>
    <slot />
</h4>