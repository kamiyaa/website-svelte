<script>
export let project;

</script>

<div class="flex_card">
    <a href="#/project/2">
        <div class="flex_card_img_container">
            <div class="flex_card_img">
                 <img alt={project.name} src={project.preview_url}/>
            </div>
        </div>
        <div class="flex_card_info">
                <h4>{project.name}</h4>
                <h6>{project.languages.join(", ")}</h6>
                <p>{project.description}</p>
        </div>
    </a>
</div>
