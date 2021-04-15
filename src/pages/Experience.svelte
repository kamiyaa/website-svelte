<script>
export let params = {}

import { ExperienceHeader, PageTemplate } from "../components";
import { EXPERIENCE_LIST } from "../data";

const idx = params.id;

let experience = null;
if (idx < EXPERIENCE_LIST.length) {
    experience = EXPERIENCE_LIST[idx];
}
</script>

<PageTemplate>
    {#if experience}
        <div class="article">
            <div class="article-content">
            <ExperienceHeader experience={experience}/>
            <svelte:component this={experience.content}/>
            </div>
        </div>
    {/if}

    {#if !experience}
        <div class="article">
            <div class="article-content">
            <div>Experience Not Found</div>
            </div>
        </div>
    {/if}
</PageTemplate>

