import GameOfLife from "./projects/GameOfLife.svelte";
import Joshuto from "./projects/Joshuto.svelte";
import Ruiji from "./projects/Ruiji.svelte";
import SpaceFarmerBot from "./projects/SpaceFarmerBot.svelte";
import Website from "./projects/Website.svelte";

const PROJECT_LIST =
[
    {
        name: "Joshuto",
        description: "Terminal File Manager",
        url: "https://github.com/kamiyaa/joshuto",
        technologies: [ "Rust", "tui-rs", ],
        owner: "kamiyaa",
        repo_name: "joshuto",
        preview_url: "https://raw.githubusercontent.com/kamiyaa/joshuto/main/screenshot.png",
        preview_thumbnail_url: "https://raw.githubusercontent.com/kamiyaa/joshuto/main/screenshot.png",
        tags: [
            "Rust",
            "Termion",
            "Tui-rs",
            "Terminal",
            "Concurrency",
            "Traits",
            "Boxing",
            "Toml",
        ],
        content: Joshuto,
    },
    {
        name: "Ruiji",
        description: "Reverse Image Search Tool",
        url: "https://github.com/kamiyaa/ruiji",
        technologies: [ "C", "Curl" ],
        owner: "kamiyaa",
        repo_name: "ruiji",
        preview_url: "https://github.com/kamiyaa/ruiji/raw/master/ruiji_screenshot.png",
        preview_thumbnail_url: "https://github.com/kamiyaa/ruiji/raw/master/ruiji_screenshot.png",
        tags: [ "C", "Curl", "Make", "Meson" ],
        content: Ruiji,
    },
    {
        name: "Game of Life",
        description: "Game of Life Simulator",
        url: "https://github.com/kamiyaa/game-of-life",
        technologies: [ "Rust", "Javascript", "WebAssembly" ],
        owner: "kamiyaa",
        repo_name: "game-of-life",
        preview_url: "https://github.com/kamiyaa/game-of-life/raw/master/screenshot.png",
        preview_thumbnail_url: "https://github.com/kamiyaa/game-of-life/raw/master/screenshot.png",
        tags: [ "Rust", "WebAssembly", "Javascript", "Webpack" ],
        content: GameOfLife,
    },
    {
        name: "SpaceFarmerBot",
        description: "Discord Bot",
        url: "https://github.com/Tusk98/SpaceFarmerBot",
        technologies: [ "Golang" ],
        owner: "Tusk98",
        repo_name: "SpaceFarmerBot",
        preview_url:
            "https://raw.githubusercontent.com/Tusk98/SpaceFarmerBot/master/SpaceFarmer.jpg",
        preview_thumbnail_url:
            "https://raw.githubusercontent.com/Tusk98/SpaceFarmerBot/master/SpaceFarmer.jpg",
        tags: [ "Golang", "Discord", "Json" ],
        content: SpaceFarmerBot,
    },
    {
        name: "WebAssembly Website",
        description: "Personal Website",
        url: "https://github.com/kamiyaa/website-wasm",
        technologies: [ "React.js", "Rust", "Svelte", "Sass", "Yew" ],
        owner: "kamiyaa",
        repo_name: "website-wasm",
        preview_url: "https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/website_wasm_screenshot.png",
        preview_thumbnail_url:
            "https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/website_wasm_screenshot.png",
        tags: [
            "Javascript",
            "React",
            "React Hooks",
            "Rust",
            "Svelte",
            "Sass",
            "Yew",
        ],
        content: Website,
    },
];

export default PROJECT_LIST;
