<script lang="ts">
	import { FONT_COLOR } from '$lib/types';
	import type { ProjectDetails } from '$lib/types/project';
	import Card from '../card/Card.svelte';
	import CardContent from '../card/CardContent.svelte';
	import CardDescription from '../card/CardDescription.svelte';
	import CardImage from '../card/CardImage.svelte';
	import CardSubtitle from '../card/CardSubtitle.svelte';
	import CardTitle from '../card/CardTitle.svelte';

	export let project: ProjectDetails;
</script>

<Card class="sm:w-80 w-full sm:mx-4 mx-0">
	<a
		class={`
      ${FONT_COLOR['accent1']}
      no-underline
      `}
		rel="noreferrer"
		href={project.url}
		target="_blank"
	>
		<CardImage class="max-h-32" alt={project.name} src={project.previewUrl} />
		<CardContent>
			<CardTitle>{project.name}</CardTitle>
			<CardSubtitle>{project.technologies.join(', ')}</CardSubtitle>
			<CardDescription>
				{project.description}
			</CardDescription>
		</CardContent>
	</a>
</Card>
