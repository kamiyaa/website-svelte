<script context="module" lang="ts">
	import { HEADER_LINKS } from '$lib/data';
	import SocialLinks from './SocialLinks.svelte';

	const homeHeader = `
    align-start
    text-light-text-title
    dark:text-dark-text-title
    flex flex-row flex-wrap
    justify-around
    w-full
  `;
	const homeHeaderSection = `
    sm:px-12 px-2
  `;
	const homeProfile = `
    rounded-full
    object-cover
    mx-1 my-2
    sm:h-48 h-44
    shadow-md
    dark:shadow-md-dark
  `;
	const headerLinkContainer = `
    font-2xl
    font-semibold
    m-0 p-0
  `;
	const headerLink = `
    color-inherit
    duration-300
    no-underline
    hover:text-light-link-hover2
    dark:hover:text-dark-link-hover2
  `;
	const logoLinkContainer = `
    m-0 p-0
  `;
	const logoLink = `
    color-inherit
    duration-300
    font-bold
    text-4xl
    no-underline
    hover:text-light-link-hover2
    dark:hover:text-dark-link-hover2
  `;
</script>

<header class={homeHeader}>
	<div class={homeHeaderSection}>
		<img
			class={homeProfile}
			alt="profile"
			src="https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/IMG_20200825_162748_1.jpg"
		/>
	</div>
	<div class={homeHeaderSection}>
		<div class={logoLinkContainer}>
			<a class={logoLink} href="/#">Jeff Zhao</a>
		</div>
		<div class="sm:text-lg text-base duration-300 ease-in">
			<p>
				Hi, my name is Jeff Zhao.
				<br />
				I'm a recent Computer Science graduate at the
				<b>University of Toronto</b>.
				<br />
				I enjoy working with open source software, learning new technologies
				<br />
				and coming up with innovative ways to solve problems.
				<br />
				Recently, I've taken an interest in blockchain technologies.
				<br />
			</p>
			<p>Feel free to look around!</p>
		</div>
		<ul class="mt-3 text-xl p-0 list-none">
			{#each HEADER_LINKS as v}
				<li>
					<div class={headerLinkContainer}>
						<a class={headerLink} href={v.route}>{'> '}{v.name}</a>
					</div>
				</li>
			{/each}
		</ul>
		<div class="mt-4">
			<SocialLinks />
		</div>
	</div>
</header>
