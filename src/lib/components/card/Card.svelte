<script lang="ts">
	import { BACKGROUND_COLOR } from '$lib/types/Background';

  const verticalCard = `
    ${BACKGROUND_COLOR['secondary']}
    hover:shadow-md
    dark:hover:shadow-md-dark
    duration-300 ease-in
    rounded-lg
    overflow-hidden p-0
    mb-8
    ${$$props.class}
    h-full
  `;
</script>

<div class={verticalCard}>
    <slot />
</div>
