<script lang="ts">
	import HomeHeader from './HomeHeader.svelte';

	import ExperienceList from '$lib/components/experience/ExperienceList.svelte';
	import ProjectList from '$lib/components/project/ProjectList.svelte';

	import { EXPERIENCE_LIST, PROJECT_LIST } from '$lib/data';

	const homeHeaderSection = `
		py-4
	`;

	const homeSection = `
		flex
		flex-col
		overflow-x-auto
		w-full
	`;
	const h2Header = `
		my-5 sm:text-2xl text-xl
	`;

	const link = `
		text-3xl
		text-light-text-title
		dark:text-dark-text-title
		duration-300 ease-in
		no-underline
		outline-none
		hover:text-light-link-hover2
		dark:hover:text-dark-link-hover2
		font-semibold
	`;
</script>

<div>
	<div class={homeHeaderSection}>
		<HomeHeader />
	</div>
	<div class={homeSection}>
		<a class={link} href="#experiences" id="experiences">
			<h2 class={h2Header}>Experiences</h2>
		</a>
		<div>
			<ExperienceList list={EXPERIENCE_LIST} />
		</div>
	</div>
	<div class={homeSection}>
		<a class={link} href="#projects" id="projects">
			<h2 class={h2Header}>Projects</h2>
		</a>
		<div>
			<ProjectList list={PROJECT_LIST} />
		</div>
	</div>
</div>
