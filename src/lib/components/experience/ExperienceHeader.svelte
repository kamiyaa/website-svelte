<script context="module" lang="ts">
	import type { ExperienceDetails } from '$lib/types';
</script>

<script lang="ts">
	export let experience: ExperienceDetails;
</script>

<div>
	<h2 id={experience.title}>{experience.title}</h2>
	<br />
	<h6>
		<a target="_blank" rel="noopener noreferrer" href={experience.companyUrl}
			>{experience.company}</a
		>
	</h6>
	<br />
	<h6>{experience.startDate}{' - '}{experience.endDate}</h6>
	<div class="tag-list-container">
		<ul>
			{#each experience.tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	</div>
	<br />
</div>
