import type { ProjectDetails } from '$lib/types/project';

const PROJECT_LIST: ProjectDetails[] = [
	{
		name: 'Joshuto',
		description: 'Terminal File Manager',
		url: 'https://github.com/kamiyaa/joshuto',
		technologies: ['Rust', 'tui-rs'],
		owner: 'kamiyaa',
		repoName: 'joshuto',
		previewUrl: 'https://raw.githubusercontent.com/kamiyaa/joshuto/main/screenshot.png',
		previewThumbnailUrl: 'https://raw.githubusercontent.com/kamiyaa/joshuto/main/screenshot.png',
		tags: ['Rust', 'Termion', 'Tui-rs', 'Terminal', 'Concurrency', 'File Manager']
	},
	{
		name: 'Dizi',
		description: 'Server-Client music player',
		url: 'https://github.com/kamiyaa/dizi',
		technologies: ['Rust', 'tui-rs'],
		owner: 'kamiyaa',
		repoName: 'dizi',
		previewUrl: 'https://raw.githubusercontent.com/kamiyaa/dizi/main/screenshot.png',
		previewThumbnailUrl: 'https://raw.githubusercontent.com/kamiyaa/dizi/main/screenshot.png',
		tags: ['Rust', 'Termion', 'Tui-rs', 'Terminal', 'Concurrency', 'Music Player']
	},
	{
		name: 'Ruiji',
		description: 'Reverse Image Search Tool',
		url: 'https://github.com/kamiyaa/ruiji',
		technologies: ['C', 'Curl'],
		owner: 'kamiyaa',
		repoName: 'ruiji',
		previewUrl: 'https://github.com/kamiyaa/ruiji/raw/master/ruiji_screenshot.png',
		previewThumbnailUrl: 'https://github.com/kamiyaa/ruiji/raw/master/ruiji_screenshot.png',
		tags: ['C', 'Curl', 'Make', 'Meson']
	},
	{
		name: 'Game of Life',
		description: 'Game of Life Simulator',
		url: 'https://github.com/kamiyaa/game-of-life',
		technologies: ['Rust', 'Javascript', 'WebAssembly'],
		owner: 'kamiyaa',
		repoName: 'game-of-life',
		previewUrl: 'https://github.com/kamiyaa/game-of-life/raw/master/screenshot.png',
		previewThumbnailUrl: 'https://github.com/kamiyaa/game-of-life/raw/master/screenshot.png',
		tags: ['Rust', 'WebAssembly', 'Javascript', 'Webpack']
	},
	{
		name: 'SpaceFarmerBot',
		description: 'Discord Bot',
		url: 'https://github.com/Tusk98/SpaceFarmerBot',
		technologies: ['Golang'],
		owner: 'Tusk98',
		repoName: 'SpaceFarmerBot',
		previewUrl: 'https://raw.githubusercontent.com/Tusk98/SpaceFarmerBot/master/SpaceFarmer.jpg',
		previewThumbnailUrl:
			'https://raw.githubusercontent.com/Tusk98/SpaceFarmerBot/master/SpaceFarmer.jpg',
		tags: ['Golang', 'Discord', 'Json']
	},
	{
		name: 'WebAssembly Website',
		description: 'Personal Website',
		url: 'https://github.com/kamiyaa/website-wasm',
		technologies: ['React.js', 'Rust', 'Svelte', 'Sass', 'Yew'],
		owner: 'kamiyaa',
		repoName: 'website-wasm',
		previewUrl:
			'https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/website_wasm_screenshot.png',
		previewThumbnailUrl:
			'https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/website_wasm_screenshot.png',
		tags: ['Javascript', 'React', 'React Hooks', 'Rust', 'Svelte', 'Sass', 'Yew']
	}
];

export default PROJECT_LIST;
