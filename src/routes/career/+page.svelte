<script lang="ts">
	import { CONTACT_EMAIL } from '$lib/constants/company';

	const h2Header = `
		my-5 sm:text-4xl text-2xl
	`;
</script>

<div>
	<h2 class={h2Header}>Career</h2>
	<p>Please send your resume to {CONTACT_EMAIL}</p>
</div>
