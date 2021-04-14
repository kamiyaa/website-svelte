<script>
export let list;

import ProjectCard from "./ProjectCard.svelte";
</script>


<div class="flex_card_list">
    {#each list as v}
        <ProjectCard project={v} route="#/"/>
    {/each}
</div>
