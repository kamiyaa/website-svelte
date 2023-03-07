<script lang="ts">
	import type { ContributionDetails } from '$lib/types';

	export let contribution: ContributionDetails;
</script>

<div class="horizontal_card">
	<div class="horizontal_card_container">
		<div class="horizontal_card_header">
			<div class="horizontal_card_icon">
				<a target="_blank" rel="noopener noreferrer" href={contribution.url}>
					<div class="horizontal_card_img_cover">
						<img alt={contribution.name} src={contribution.previewThumbnailUrl} />
					</div>
				</a>
			</div>
			<div class="horizontal_card_info">
				<h3 id={contribution.name}>{contribution.name}</h3>
				<h5>{contribution.technologies.join(', ')}</h5>
				<p>{contribution.description}</p>
			</div>
		</div>
		<div class="horizontal_card_info" />
	</div>
</div>
