<script>
	const GITHUB_LINK = 'https://github.com/kamiyaa/';
	const LINKEDIN_LINK = 'https://www.linkedin.com/in/jiayii-zhao/';
	const YOUTUBE_LINK = 'https://www.youtube.com/c/Kamiyaa';
	const EMAIL_LINK = 'mailto:jeff.no.zhao@gmail.com';
	const RESUME_LINK =
		'https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/Resume-Jeff-Zhao.pdf';

	const socialContainer = `
    flex flex-wrap flex-row w-full
  `;

	const socialLink = `
    color-inherit
    font-2xl
    duration-300
    hover:text-light-link-hover2
    dark:hover:text-dark-link-hover2
    visited:color-inherit
  `;

	const socialLinkContainer = `
    inline
    mr-6
    mb-6
  `;

	const faIcon = `fa fa-2xl`;
	const fabIcon = `fab fa-2xl`;
</script>

<div class={socialContainer}>
	<div class={socialLinkContainer}>
		<a class={socialLink} target="_blank" rel="noopener noreferrer" href={GITHUB_LINK}
			><i class={`${fabIcon} fa-github`} />
		</a>
	</div>

	<div class={socialLinkContainer}>
		<a class={socialLink} target="_blank" rel="noopener noreferrer" href={LINKEDIN_LINK}
			><i class={`${fabIcon} fa-linkedin`} />
		</a>
	</div>

	<div class={socialLinkContainer}>
		<a class={socialLink} target="_blank" rel="noopener noreferrer" href={YOUTUBE_LINK}
			><i class={`${fabIcon} fa-youtube`} />
		</a>
	</div>

	<div class={socialLinkContainer}>
		<a class={socialLink} href={EMAIL_LINK}><i class={`${faIcon} fa-envelope`} /> </a>
	</div>

	<div class={socialLinkContainer}>
		<a class={socialLink} href={RESUME_LINK}><i class={`${faIcon} fa-file`} /> </a>
	</div>
</div>
