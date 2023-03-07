import Capstone from './contributions/Capstone.svelte';
import Jenkins from './contributions/Jenkins.svelte';
import Maven from './contributions/Maven.svelte';
import Portage from './contributions/Portage.svelte';

const CONTRIBUTION_LIST = [
	{
		name: 'Capstone',
		url: 'https://github.com/aquynh/capstone',
		icon_url:
			'https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/capstone_icon.png',
		description: 'Multi-platform, multi-architecture disassembly framework',
		languages: ['C'],
		content: Capstone
	},
	{
		name: 'Portage',
		url: 'https://github.com/gentoo/gentoo',
		icon_url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Gentoo-logo-dark.svg',
		description: 'Official package manager and distribution system for Gentoo',
		languages: ['Shell'],
		content: Portage
	},
	{
		name: 'Maven',
		url: 'https://github.com/carlossg/docker-maven',
		icon_url: 'https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/maven_icon.png',
		description: 'Maven Dockerfiles',
		languages: ['Scripting'],
		content: Maven
	},
	{
		name: 'Jenkins',
		url: 'https://github.com/jenkinsci/jenkins',
		icon_url:
			'https://github.com/kamiyaa/kamiyaa.github.io/releases/download/0.1.0/jenkins_icon.png',
		description: 'Free and open source automation server',
		languages: ['Scripting'],
		content: Jenkins
	}
];

export default CONTRIBUTION_LIST;
