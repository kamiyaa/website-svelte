<script lang="ts">
	import Text from '$lib/components/base/Text.svelte';
	import Card from '$lib/components/card/Card.svelte';
	import CardContent from '$lib/components/card/CardContent.svelte';
	import CardDescription from '$lib/components/card/CardDescription.svelte';
	import CardImage from '$lib/components/card/CardImage.svelte';
	import CardSubtitle from '$lib/components/card/CardSubtitle.svelte';
	import CardTitle from '$lib/components/card/CardTitle.svelte';
	import { TEXT_ALIGN } from '$lib/types';

	const h2Header = `
		my-5 sm:text-4xl text-2xl
		text-transparent
		bg-clip-text text-transparent bg-gradient-to-r
		from-dark-text-accent1 to-dark-text-accent2
		font-bold
		${TEXT_ALIGN['center']}
	`;

	const contactUsButton = `
		text-white
		py-3 px-8 rounded-full
		bg-gradient-to-r
		from-dark-text-accent1 to-violet-500
		hover:opacity-90 duration-300
	`;

	const cardClass = `
		sm:w-80 w-full sm:mx-4 mx-0
	`;
</script>

<div>
	<div class="animate-slide-fade-in">
		<h2 class={h2Header}>Software Consulting Services</h2>
		<p class={`${TEXT_ALIGN['center']}`}>Websites, Mobile Apps, dApps, Software Solutions</p>
		<div class="h-6" />
		<div class="flex justify-center">
			<a
				href="/contact"
				class={contactUsButton}
			>
				<Text color="none" weight="black" align="center">Contact Us</Text>
			</a>
		</div>
		<div class="h-14"/>
		<div class="flex flex-row flex-wrap justify-center">
			<Card class={cardClass}>
				<CardImage
					class="max-h-48"
					src="https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/ethereum.png"
					 />
				<CardContent>
					<CardTitle>Blockchain Technology</CardTitle>
					<div class="h-2"/>
					<CardDescription>Decentralized applications for a web3 future</CardDescription>
				</CardContent>
			</Card>
			<Card class={cardClass}>
				<CardImage
					class="max-h-48"
					src="https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/web_dev.webp"
					 />
				<CardContent>
					<CardTitle>Web Development</CardTitle>
					<div class="h-2"/>
					<CardDescription>Design, deploy landing pages, store fronts, etc.</CardDescription>
				</CardContent>
			</Card>
			<Card class={cardClass}>
				<CardImage
					class="max-h-48"
					src="https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/mobile_dev.jpg"
					 />
				<CardContent>
					<CardTitle>Mobile Apps</CardTitle>
					<div class="h-2"/>
					<CardDescription>Innovative mobile experiences on iOS and Android</CardDescription>
				</CardContent>
			</Card>
			<Card class={cardClass}>
				<CardImage
					class="max-h-48"
					src="https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/sass.jpg"
					 />
				<CardContent>
					<CardTitle>Software Solutions</CardTitle>
					<div class="h-2"/>
					<CardDescription>Custom-built software tools to suit any needs</CardDescription>
				</CardContent>
			</Card>
		</div>
	</div>
</div>
