<script>
export let project;

import GithubMap from "../util/github_stats.js";

const FETCH_STATE = {
    DONE: 1,
    FETCHING: 2,
    IDLE: 3,
    ERROR: 4,
};

let fetch_state = {state: FETCH_STATE.IDLE};
let project_stats = null;

const key = `${project.owner}/${project.repo_name}`;

const getProjectStats = async (project) => {
    const api_link = `https://api.github.com/repos/${key}`;

    const promise = fetch(api_link);
    fetch_state = {state: FETCH_STATE.FETCHING};
    const res = await promise;

    if (res.status !== 200) {
        fetch_state = {state: FETCH_STATE.ERROR, data: res};
        return;
    }

    const res_json = await res.json();

    GithubMap[key] = res_json;
    project_stats = res_json;

    fetch_state = {state: FETCH_STATE.DONE};
};

if (GithubMap[key] === undefined) {
    getProjectStats(project);
} else {
    fetch_state = {state: FETCH_STATE.FETCHING};
    project_stats = GithubMap[key];
    fetch_state = {state: FETCH_STATE.DONE};
}

</script>

<div>
    <h2 id={project.name}>{project.name}</h2>
    <br/>
    <h6>{project.description}, {project.technologies.join(", ")}</h6>
    <div class="project-github">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
            <a
                class="project-github-link"
                target="_blank"
                href={project.url} rel="noopener noreferrer">
                <i
                    style="margin-right: 1rem; font-size: 2.2rem;" class="fab fa-github project-github-link"/>
            </a>
        </div>
        {#if fetch_state.state == FETCH_STATE.FETCHING}
            <div style="margin-right: 0.5rem;">
                Fetching Github metrics
            </div>
        {/if}
        {#if fetch_state.state == FETCH_STATE.DONE}
            <div style="display: flex; flex-direction: row; align-items: center; justify-content: flex-start">
                <div style="font-size: 1.8rem;" class="project-github-icon">
                    <i class="fas fa-star"/>
                </div>
                <div style="margin-right: 0.5rem;">
                    {project_stats.stargazers_count}
                </div>

                <div style="font-size: 1.8rem;" class="project-github-icon">
                    <i class="fas fa-code-branch"/>
                </div>
                <div style="margin-right: 0.5rem;">
                    {project_stats.forks_count}
                </div>
            </div>
        {/if}
        {#if fetch_state.state == FETCH_STATE.ERROR}
            <div style="margin-right: 0.5rem;">
                {fetch_state.data}
            </div>
        {/if}
    </div>
    <div class="tag-list-container">
        <ul>
            {#each project.tags as tag}
                <li>{tag}</li>
            {/each}
        </ul>
    </div>
    <a
        href={project.preview_url}
        rel="noopener noreferrer"
        target="_blank">
        <img class="project-image"
            alt={project.name}
            src={project.preview_thumbnail_url}/>
    </a>
    <br/>
</div>

