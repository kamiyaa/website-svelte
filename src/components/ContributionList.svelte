<script>
export let list;

import ContributionCard from "./ContributionCard.svelte";
</script>

<div class="flex_card_list">
    {#each list as v}
        <ContributionCard contribution={v}/>
    {/each}
</div>
