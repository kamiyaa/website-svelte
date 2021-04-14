<script>
export let experience;
</script>

<div class="horizontal_card">
    <div class="horizontal_card_container">
        <div class="horizontal_card_header">
            <div class="horizontal_card_icon">
                <div class="horizontal_card_img_cover">
                    <img alt={experience.company} src={experience.icon_url}/>
                </div>
            </div>
            <div class="horizontal_card_info">
                <h4>{experience.title}</h4>
                <a target="_blank" rel="noopener noreferrer"
                    href={experience.company_url}>
                    <h6>{experience.company}</h6>
                </a>
                <p>{experience.start_date} - {experience.end_date}</p>
            </div>
        </div>
        <div class="horizontal_card_info">
            {experience.summary}
            <a href="#/">Read more</a>
        </div>
    </div>
</div>
