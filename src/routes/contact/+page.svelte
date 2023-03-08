<script lang="ts">
	import { CONTACT_EMAIL } from '$lib/constants/company';

	const h2Header = `
		my-5 sm:text-4xl text-2xl
	`;
</script>

<div>
	<h2 class={h2Header}>Contact</h2>
	<div class="h-2" />
	<p>Phone: +1 647-901-5654</p>
	<div class="h-4" />
	<p>Email: {CONTACT_EMAIL}</p>
</div>
