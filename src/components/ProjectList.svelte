<script>
export let list;

import ProjectCard from "./ProjectCard.svelte";


</script>

<div class="flex_card_list">
    {#each list as v, i}
        <ProjectCard project={v} route={`/#/project/${i}`}/>
    {/each}
</div>
