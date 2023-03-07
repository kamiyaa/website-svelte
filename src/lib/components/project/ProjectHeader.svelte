<script lang="ts">
	import type { ProjectDetails } from '$lib/types/project';
	import type { GithubStats } from '$lib/types/github';
	import type { FetchState } from '$lib/types';
	import { FetchStatus } from '$lib/types';
	import GithubMap from '$lib/api/github_stats';

	export let project: ProjectDetails;

	let fetchState: FetchState = { status: FetchStatus.Idle };
	let projectStats: GithubStats | null = null;

	const getProjectStats = async (project: ProjectDetails) => {
		const key = `${project.owner}/${project.repoName}`;
		const api_link = `https://api.github.com/repos/${key}`;

		const promise = fetch(api_link);
		fetchState = { status: FetchStatus.Fetching };
		const res = await promise;

		if (res.status !== 200) {
			fetchState = { status: FetchStatus.Error, data: res };
			return;
		}

		const resJson = await res.json();

		GithubMap[key] = resJson;
		projectStats = resJson;

		fetchState = { status: FetchStatus.Done };
	};

	const key = `${project.owner}/${project.repoName}`;
	if (GithubMap[key] === undefined) {
		getProjectStats(project);
	} else {
		fetchState = { status: FetchStatus.Fetching };
		projectStats = GithubMap[key];
		fetchState = { status: FetchStatus.Done };
	}
</script>

<div>
	<h2 id={project.name}>{project.name}</h2>
	<br />
	<h6>{project.description}, {project.technologies.join(', ')}</h6>
	<div class="project-github">
		<div
			style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start"
		>
			<a class="project-github-link" target="_blank" href={project.url} rel="noopener noreferrer">
				<i
					style="margin-right: 1rem; font-size: 2.2rem;"
					class="fab fa-github project-github-link"
				/>
			</a>
		</div>
		{#if fetchState.status == FetchStatus.Fetching}
			<div style="margin-right: 0.5rem;">Fetching Github metrics</div>
		{/if}
		{#if fetchState.status == FetchStatus.Done}
			<div
				style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start"
			>
				<div style="font-size: 1.8rem;" class="project-github-icon">
					<i class="fas fa-star" />
				</div>
				<div style="margin-right: 0.5rem;">
					{projectStats?.stargazers_count}
				</div>

				<div style="font-size: 1.8rem;" class="project-github-icon">
					<i class="fas fa-code-branch" />
				</div>
				<div style="margin-right: 0.5rem;">
					{projectStats?.forks_count}
				</div>
			</div>
		{/if}
		{#if fetchState.status == FetchStatus.Error}
			<div style="margin-right: 0.5rem;">
				{fetchState.data}
			</div>
		{/if}
	</div>
	<div class="tag-list-container">
		<ul>
			{#each project.tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	</div>
	<a href={project.previewUrl} rel="noopener noreferrer" target="_blank">
		<img class="project-image" alt={project.name} src={project.previewThumbnailUrl} />
	</a>
	<br />
</div>
