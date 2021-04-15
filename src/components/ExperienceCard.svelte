<script>
export let experience;
export let route;

import { EXPERIENCE_LIST } from "../data";
/*
import IBMSummary from "../data/experiences/IBMSummary.svelte";
import SpireTradingSummary from "../data/experiences/SpireTradingSummary.svelte";
import OPSSummary from "../data/experiences/OPSSummary.svelte";
import UofTSummary from "../data/experiences/UofTSummary.svelte";
*/

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
            <svelte:component this={experience.summary}/>
            <a href={route}>Read more</a>
        </div>
    </div>
</div>
