<script>
export const params = {}

import { PROJECT_LIST } from "../data";
import { PageTemplate } from "../components";

let project = null;
if (params.id < PROJECT_LIST.length) {
    project = PROJECT_LIST[params.id];
}

console.log(project);
</script>


{#if project}
    <PageTemplate>
        <div class="article">
            <div class="article-content">
            <ProjectHeader project={project}/>
            {project.content}
            </div>
        </div>
    </PageTemplate>
{/if}
{#if !project}
    <PageTemplate>
        <div class="article">
            <div class="article-content">
            <div>Project Not Found</div>
            </div>
        </div>
    </PageTemplate>
{/if}
