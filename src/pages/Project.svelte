<script>
export let params = {}

import { PROJECT_LIST } from "../data";
import { PageTemplate, ProjectHeader } from "../components";

const idx = params.id;

let project = null;
if (idx < PROJECT_LIST.length) {
    project = PROJECT_LIST[idx];
}
console.log(idx, project);
</script>

<PageTemplate>
    {#if project}
        <div class="article">
            <div class="article-content">
            <ProjectHeader project={project}/>
            <svelte:component this={project.content}/>
            </div>
        </div>
    {/if}

    {#if !project}
        <div class="article">
            <div class="article-content">
            <div>Project Not Found</div>
            </div>
        </div>
    {/if}

</PageTemplate>

