<script context="module" lang="ts">
	import { FONT_COLOR, FONT_COLOR_HOVER, type ExperienceDetails } from '$lib/types';
	import { BACKGROUND_COLOR } from '$lib/types/Background';

	const horizontalCardContentContainer = `
    sm:p-4 p-3
    w-full
  `;
	const horizontalCardHeader = `
    align-center flex flex-col sm:flex-row
    justify-start w-full
  `;
	const horizontalCardIcon = `
    flex justify-center
    ${BACKGROUND_COLOR['primary']}
    rounded-xl
    sm:w-20 w-14
    sm:h-20 h-14
    mb-4 mr-4 p-0
    overflow-hidden
    duration-300 ease-in
  `;
	const horizontalCardImg = `
    justify-center
    object-cover
    max-w-full max-h-full
    m-0 p-0
  `;
	const horizontalCardTitle = `
    ${FONT_COLOR['primary']}
    font-semibold
    sm:text-2xl
    text-xl
  `;
	const horizontalCardDate = `
  ${FONT_COLOR['primary']}
    sm:text-lg text-base
  `;
	const horizontalCardCompanyLink = `
    ${FONT_COLOR['accent2']}
    ${FONT_COLOR_HOVER['accent1']}
    duration-300
    sm:text-lg text-base
  `;
</script>

<script lang="ts">
	export let experience: ExperienceDetails;
</script>

<div
	class={`
  ${BACKGROUND_COLOR['secondary']}
  rounded-xl
  mb-4
  w-full
  duration-300 ease-in
`}
>
	<div class={horizontalCardContentContainer}>
		<div class={horizontalCardHeader}>
			<div class={horizontalCardIcon}>
				<img class={horizontalCardImg} alt={experience.company} src={experience.iconUrl} />
			</div>
			<div>
				<h4 class={horizontalCardTitle}>{experience.title}</h4>
				<a
					class={horizontalCardCompanyLink}
					target="_blank"
					rel="noopener noreferrer"
					href={experience.companyUrl}
				>
					<h6 class="text-lg">{experience.company}</h6>
				</a>
				<div class={horizontalCardDate}>{experience.startDate} - {experience.endDate}</div>
			</div>
		</div>
		<div>
			<!-- <svelte:component this={experience.summary}/>
      {#if experience.content}
          <a href={route}>Read more</a>
      {/if}
      -->
		</div>
	</div>
</div>
