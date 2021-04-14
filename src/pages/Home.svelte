<script>
import {
    HomeHeader,
    Footer,

    ContributionList,
    ExperienceList,
    ProjectList
} from "../components";

import {
    CONTRIBUTION_LIST,
    EXPERIENCE_LIST,
    PROJECT_LIST
} from "../data";

</script>

<div class="base">
    <HomeHeader/>
    <div class="home-section">
        <div style="width: 100%;">
            <a class="link" href="/#experiences">
                <h2 id="experiences">Experiences</h2>
            </a>
            <div>
            <ExperienceList list={EXPERIENCE_LIST}/>
            </div>
        </div>
    </div>
    <div class="home-section">
        <div style="width: 100%;">
            <a class="link" href="/#projects">
                <h2 id="projects">Projects</h2>
            </a>
            <div>
            <ProjectList list={PROJECT_LIST}/>
            </div>
        </div>
    </div>
    <div class="home-section">
        <div style="width: 100%;">
            <a class="link" href="/#contributions">
                <h2 id="contributions">Contributions</h2>
            </a>
            <div>
            <ContributionList list={CONTRIBUTION_LIST}/>
            </div>
        </div>
    </div>
    <Footer/>
</div>
