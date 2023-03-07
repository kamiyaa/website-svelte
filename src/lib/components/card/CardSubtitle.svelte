<script lang="ts">
	import { FONT_COLOR } from "$lib/types";
</script>

<h6 class={`
    ${FONT_COLOR['primary']}
    text-sm
`}>
    <slot />
</h6>