<script>
import { LOGO_NAME, HEADER_LINKS } from "../data";

import SocialLinks from "./SocialLinks.svelte";
</script>

<header class="home-header">
    <div class="home-header-section">
    <img
        class="home-profile"
        alt="profile"
        src="https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/IMG_20200825_162748_1.jpg"/>
    </div>
    <div class="home-header-section">
        <div class="logo-link">
            <a href="#/">{LOGO_NAME}</a>
        </div>
        <div>
            <p>Hi, my name is Jeff Zhao.
            <br/>
            I'm currently a 4th year student studying Computer Science at the
            <b>University of Toronto</b>.
            <br/>
            I enjoy working with open source software, learning new technologies
            <br/>
            and coming up with innovative ways to solve problems.
            <br/>
            </p>
            <p>Feel free to look around!
            </p>
        </div>
        <ul>
            {#each HEADER_LINKS as v}
                <li><div class="header-link">
                    <a href={v.route}>{v.name}</a>
                </div></li>
            {/each}
        </ul>
        <SocialLinks/>
    </div>
</header>
