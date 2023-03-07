<script context="module" lang="ts">
	import type { ExperienceDetails } from '$lib/types';
	import ExperienceCard from './ExperienceCard.svelte';
</script>

<script lang="ts">
	export let list: ExperienceDetails[];
</script>

<div class="align-start flex flex-wrap duration-300 ease-in">
	{#each list as v, i}
		<ExperienceCard experience={v} />
	{/each}
</div>
