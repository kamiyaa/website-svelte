<script>
export let id;

const experience = id;
</script>

<PageTemplate>
    <div class="article">
        <div class="article-content">
        <ExperienceHeader experience={experience}/>
        {experience.content}
        </div>
    </div>
</PageTemplate>

