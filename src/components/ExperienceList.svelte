<script>
export let list;

import ExperienceCard from "./ExperienceCard.svelte";

</script>

<div class="flex_card_list">
    {#each list as v, i}
        <ExperienceCard experience={v} route={`/#/experience/${i}`}/>
    {/each}
</div>
