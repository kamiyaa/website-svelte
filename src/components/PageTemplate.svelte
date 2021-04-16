<script>
import Header from "./Header.svelte";
import Footer from "./Footer.svelte";
</script>

<div class="base">
<Header/>
	<slot></slot>
<Footer/>
</div>
