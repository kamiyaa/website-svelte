<script context="module" lang="ts">
	import type { ProjectDetails } from '$lib/types/project';
	import ProjectCard from './ProjectCard.svelte';
</script>

<script lang="ts">
	export let list: ProjectDetails[];
</script>

<div class="align-start flex flex-wrap duration-300 ease-in">
	{#each list as v, i}
		<ProjectCard project={v} />
	{/each}
</div>
