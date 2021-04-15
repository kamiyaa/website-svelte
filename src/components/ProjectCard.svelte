<script>
export let project, route;

</script>

<div class="flex_card">
    <a href={route}>
        <div class="flex_card_img_container">
            <div class="flex_card_img">
                 <img alt={project.name} src={project.preview_url}/>
            </div>
        </div>
        <div class="flex_card_info">
                <h4>{project.name}</h4>
                <h6>{project.technologies.join(", ")}</h6>
                <p>{project.description}</p>
        </div>
    </a>
</div>
