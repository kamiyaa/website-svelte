<script>
import { onMount } from 'svelte';

import Header from "./Header.svelte";
import Footer from "./Footer.svelte";

onMount(() => {
    window.scrollTo(0, 0);
});
</script>

<div class="base">
<Header/>
	<slot></slot>
<Footer/>
</div>
