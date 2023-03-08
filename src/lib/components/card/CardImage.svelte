<script lang="ts">
	export let alt: string = '';
	export let src: string = '';
</script>

<div
	class={`
    w-full
    h-full
    ${$$props.class}
    object-cover
    overflow-hidden
`}
>
	<img
		class="
        bg-cover
        w-full
        m-0
        p-0
    "
		{alt}
		{src}
	/>
</div>
