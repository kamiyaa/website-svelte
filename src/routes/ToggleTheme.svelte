<script context="module" lang="ts">
	import { darkTheme } from '$lib/api/theme';
</script>

<script lang="ts">
	const toggleDark = () => {
		$darkTheme = !$darkTheme;
	};

	$: iconClass = $darkTheme ? 'fa-moon' : 'fa-sun';

	$: faIcon = `
		fa-solid fa-sm ${iconClass}
	`;
</script>

<button on:click={toggleDark} class="hover:text-dark-link-hover2 duration-300">
	<div class="flex flex-row justify-center">
		<div><i class={faIcon} /></div>
	</div>
</button>
