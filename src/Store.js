import { readable } from 'svelte/store';

export const socialsData = readable({
	commonProps: {
		width: 32,
		height: 32,
		color: '#ddd',
		class: 'hover:translate-x-1 hover:opacity-60 cursor-pointer transition-all'
	},
	list: [
		{
			href: 'https://github.com/shoebilyas123',
			icon: 'mdi:github'
		},
		{
			href: 'https://twitter.com/shoebilyastwts',
			icon: 'mdi:twitter'
		},
		{
			href: 'https://linkedin.com/in/shoeb-ilyas',
			icon: 'mdi:linkedin'
		},
		{
			href: 'https://instagram.com/shoebilyas.uf',
			icon: 'mdi:instagram'
		}
	]
});
