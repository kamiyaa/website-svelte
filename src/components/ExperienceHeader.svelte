<script>
export let experience;
</script>

<div>
    <h2 id={experience.title}>{experience.title}</h2>
    <br/>
    <h6><a
        target="_blank"
        rel="noopener noreferrer"
        href={experience.company_url}>{experience.company}</a></h6>
    <br/>
    <h6>{experience.start_date}{" - "}{experience.end_date}</h6>
    <div class="tag-list-container">
        <ul>
            {#each experience.tags as tag}
                <li>{tag}</li>
            {/each}
        </ul>
    </div>
    <br/>
</div>
