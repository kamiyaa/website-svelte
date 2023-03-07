<script lang="ts">
	import type { ContributionDetails } from '$lib/types';
	import ContributionCard from './ContributionCard.svelte';

	export let list: ContributionDetails[];
</script>

<div class="flex_card_list">
	{#each list as v}
		<ContributionCard contribution={v} />
	{/each}
</div>
